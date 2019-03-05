import { useState, useEffect } from 'react';

// shared storage of legislators
let storedContactMapGetter = null;

/**
 * @returns {[object[], object]} legislator name to contact map
 */
function useLegislatorContactData() {
  const [getContactByName, setContactMapGetter] = useState(
    storedContactMapGetter
  );

  useEffect(() => {
    if (getContactByName) return;

    import('data/ly-tel.json').then(data => {
      const map = (data.default || []).reduce((agg, { name, contacts }) => {
        agg[name.slice(0, 3)] = contacts;
        return agg;
      }, {});

      setContactMapGetter(
        // Cannot directly return getter function, it will be regarded as "functional update"
        // Ref: https://reactjs.org/docs/hooks-reference.html#functional-updates
        //
        () =>
          (storedContactMapGetter = function getContact(name = '') {
            return map[name.slice(0, 3)];
          })
      );
    });
  }, [getContactByName]);

  return getContactByName;
}

export default useLegislatorContactData;
