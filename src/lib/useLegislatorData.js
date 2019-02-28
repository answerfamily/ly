import { useState, useEffect, useMemo } from 'react';

// shared storage of legislators
let legislatorData = null;

/**
 * @returns {[object[], object]} legislators & legislatorMap (id to legislator)
 */
function useLegislatorData() {
  const [legislators, setLegislators] = useState(legislatorData);

  useEffect(() => {
    if (legislators) return;

    import('data/legislators.json').then(data =>
      setLegislators(
        (legislatorData = /* filter out legislators that has no PrideWatch data */ data.default.rows.filter(
          ({ area }) => !!area
        ))
      )
    );
  });

  return [
    legislators,
    useMemo(
      () =>
        (legislators || []).reduce((agg, legislator) => {
          agg[legislator.id] = legislator;
          return agg;
        }, {}),
      [legislators]
    ),
  ];
}

export default useLegislatorData;
