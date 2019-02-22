import { useState, useEffect } from 'react';

let legislatorData = null;

function useLegislatorData() {
  const [legislators, setLegislators] = useState(legislatorData);

  useEffect(() => {
    if (legislators) return;

    import('data/legislators.json').then(data =>
      setLegislators((legislatorData = data.default))
    );
  });

  return legislators;
}

export default useLegislatorData;
