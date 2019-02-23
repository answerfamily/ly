import React, { useState } from 'react';
import SettingsPage from './SettingsPage';
import SendPage from './SendPage';
import useLegislatorData from 'lib/useLegislatorData';

const DEFAULT_MESSAGE =
  '我是ＸＸ區的選民，請委員支持用合憲的法律，讓同志可以結婚。';

const POSITION_ORDER = {
  支持同婚: 1,
  支持專法: 2,
  反對同婚: 3,
  未表態: 4,
};

function App() {
  const [legislators, legislatorMap] = useLegislatorData();
  const [page, setPage] = useState('settings'); // current page. enum: 'settings', 'send'
  const [msg, setMsg] = useState(DEFAULT_MESSAGE); // message template
  const [selectedLegislatorIds, setLegislatorIds] = useState([]); // list of selected legislator ID, with done legislators always in front.
  const [doneLegislatorMap, setLegislatorDone] = useState({}); // {[done legislator ID]: true, ...}

  switch (page) {
    case 'settings':
      return (
        <SettingsPage
          msg={msg}
          onMsgChange={setMsg}
          legislators={legislators}
          selectedLegislatorIds={selectedLegislatorIds}
          onSelectionChange={selectedLegislatorIds => {
            setLegislatorIds(
              selectedLegislatorIds.sort((aId, bId) => {
                // First, put done legislators in front
                if (doneLegislatorMap[aId] && !doneLegislatorMap[bId])
                  return -1;
                if (!doneLegislatorMap[aId] && doneLegislatorMap[bId]) return 1;

                // Then compare their positions
                const aPos = POSITION_ORDER[legislatorMap[aId].position];
                const bPos = POSITION_ORDER[legislatorMap[bId].position];
                return aPos - bPos;
              })
            );
          }}
          doneLegislatorMap={doneLegislatorMap}
          onSubmit={() => setPage('send')}
        />
      );

    case 'send': {
      const selectedLegislators = selectedLegislatorIds.map(id =>
        legislators.find(legislator => legislator.id === id)
      );

      const currentIdx = selectedLegislatorIds.findIndex(
        id => !doneLegislatorMap[id]
      );

      return (
        <SendPage
          msg={msg}
          currentIdx={currentIdx}
          selectedLegislators={selectedLegislators}
          onMsgChange={setMsg}
          onNext={() =>
            setLegislatorDone({
              ...doneLegislatorMap,
              [selectedLegislators[currentIdx].id]: true,
            })
          }
          onBack={() => setPage('settings')}
        />
      );
    }
    default:
      throw new Error('Wrong page settings');
  }
}

export default App;
