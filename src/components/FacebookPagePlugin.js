import React, { useEffect, useRef } from 'react';

import FBAsync from 'lib/FBAsync';

function FacebookPagePlugin({ tabs = ['messages', 'timeline'], href = '' }) {
  const fbRoot = useRef(null);

  useEffect(() => {
    FBAsync.then(FB => {
      FB.XFBML.parse(fbRoot.current);
    });
  });

  return (
    <div ref={fbRoot}>
      <div
        className="fb-page"
        data-href={href}
        data-tabs={tabs.join(',')}
        data-small-header="true"
        data-adapt-container-width="true"
        data-show-facepile="false"
        data-hide-cta="true"
      />
    </div>
  );
}

export default React.memo(FacebookPagePlugin);