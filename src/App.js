import React, { useState, useCallback, useMemo } from 'react';
import SettingsPage from './SettingsPage';
import SendPage from './SendPage';
import useLegislatorData from 'lib/useLegislatorData';

const POSITION_ORDER = {
  支持同婚: 1,
  支持專法: 2,
  反對同婚: 3,
  未表態: 4,
};

const DEFAULT_SEND_TYPE = 'fb';
const DEFAULT_FB_MESSAGE =
  '我是ＸＸ區的選民，請委員支持用合憲的法律，讓同志可以結婚。';
const DEFAULT_TEL_MESSAGE =
  '您好，我是我是ＸＸ區的選民，我想要陳情。\n\n我希望委員支持用合憲的法律，讓同志可以結婚。';

function App() {
  const [legislators, legislatorMap] = useLegislatorData();
  const [page, setPage] = useState('settings'); // current page. enum: 'settings', 'send'
  const [msg, setMsg] = useState(DEFAULT_FB_MESSAGE); // message template
  const [selectedLegislatorIds, setLegislatorIds] = useState([]); // list of selected legislator ID, with done legislators always in front.
  const [doneLegislatorMap, setLegislatorDone] = useState({}); // {[done legislator ID]: true, ...}
  const [sendType, setSendType] = useState(DEFAULT_SEND_TYPE); // 'fb', 'tel'

  const selectedLegislators = useMemo(
    () => selectedLegislatorIds.map(id => legislatorMap[id]),
    [selectedLegislatorIds, legislatorMap]
  );
  const currentIdx = useMemo(
    () => selectedLegislatorIds.findIndex(id => !doneLegislatorMap[id]),
    [selectedLegislatorIds, doneLegislatorMap]
  );

  const handleSelectionChange = useCallback(
    selectedLegislatorIds => {
      setLegislatorIds(
        selectedLegislatorIds.sort((aId, bId) => {
          // First, put done legislators in front
          if (doneLegislatorMap[aId] && !doneLegislatorMap[bId]) return -1;
          if (!doneLegislatorMap[aId] && doneLegislatorMap[bId]) return 1;

          // Then compare their positions
          const aPos = POSITION_ORDER[legislatorMap[aId].position];
          const bPos = POSITION_ORDER[legislatorMap[bId].position];
          if (aPos - bPos !== 0) {
            return aPos - bPos;
          }

          return aId - bId;
        })
      );
    },
    [setLegislatorIds, doneLegislatorMap, legislatorMap]
  );

  const handleSendTypeChange = useCallback(
    newSendType => {
      if (newSendType === sendType) return;
      setSendType(newSendType);
      window.ga('set', 'dimension2', newSendType);

      if (
        newSendType === 'fb' &&
        (msg.trim() === '' || msg === DEFAULT_TEL_MESSAGE)
      ) {
        setMsg(DEFAULT_FB_MESSAGE);
      } else if (
        newSendType === 'tel' &&
        (msg.trim() === '' || msg === DEFAULT_FB_MESSAGE)
      ) {
        setMsg(DEFAULT_TEL_MESSAGE);
      }
    },
    [msg, setMsg, sendType, setSendType]
  );

  const handleSettingsSubmit = useCallback(() => setPage('send'), [setPage]);
  const handleBackToSettings = useCallback(() => setPage('settings'), [
    setPage,
  ]);

  const handleNext = useCallback(
    () =>
      setLegislatorDone({
        ...doneLegislatorMap,
        [selectedLegislators[currentIdx].id]: true,
      }),
    [doneLegislatorMap, selectedLegislators, currentIdx]
  );

  switch (page) {
    case 'settings':
      return (
        <SettingsPage
          msg={msg}
          onMsgChange={setMsg}
          legislators={legislators}
          selectedLegislatorIds={selectedLegislatorIds}
          onSelectionChange={handleSelectionChange}
          doneLegislatorMap={doneLegislatorMap}
          sendType={sendType}
          onSendTypeChange={handleSendTypeChange}
          onSubmit={handleSettingsSubmit}
        />
      );

    case 'send': {
      return (
        <SendPage
          msg={msg}
          sendType={sendType}
          currentIdx={currentIdx}
          selectedLegislators={selectedLegislators}
          onMsgChange={setMsg}
          onNext={handleNext}
          onBack={handleBackToSettings}
        />
      );
    }
    default:
      throw new Error('Wrong page settings');
  }
}

export default App;
