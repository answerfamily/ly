import React, { useState } from 'react';
import SettingsPage from './SettingsPage';
import SendPage from './SendPage';
import useLegislatorData from 'lib/useLegislatorData';

const DEFAULT_MESSAGE =
  '我是 XX 區的選民，請委員支持用合憲的法律，讓同志可以結婚。';

function App() {
  const legislators = useLegislatorData();
  const [msg, setMsg] = useState(DEFAULT_MESSAGE);
  const [selectedLegislatorIds, setLegislatorIds] = useState([]);

  if (window.location.hash === '#/send' && selectedLegislatorIds.length > 0) {
    const selectedLegislators = selectedLegislatorIds.map(id =>
      legislators.find(legislator => legislator.id === id)
    );

    return <SendPage selectedLegislators={selectedLegislators} />;
  }

  return (
    <SettingsPage
      msg={msg}
      onMsgChange={setMsg}
      legislators={legislators}
      selectedLegistorIds={selectedLegislatorIds}
      onSelectionChange={setLegislatorIds}
    />
  );
}

export default App;
