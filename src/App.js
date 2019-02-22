import React from 'react';
import SendPage from './SendPage';
import useLegislatorData from 'lib/useLegislatorData';

function App() {
  const legislators = useLegislatorData();

  if (!legislators) {
    return <div>Loading...</div>;
  }

  return <SendPage selectedLegislators={legislators} />;
}

export default App;
