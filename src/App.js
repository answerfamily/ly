import React, { useState, useEffect } from 'react';
import SendPage from './SendPage';

function App() {
  const [legislators, setLegislators] = useState(null);

  useEffect(() => {
    if (!legislators) {
      import('./data/legislators.json').then(data =>
        setLegislators(data.default)
      );
    }
  });

  if (!legislators) {
    return <div>Loading...</div>;
  }

  return <SendPage selectedLegislators={legislators} />;
}

export default App;
