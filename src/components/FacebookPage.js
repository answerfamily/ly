import React, { useEffect } from 'react';

import FBAsync from 'lib/FBAsync';

function FacebookPage({ tabs = ['messages', 'timeline'], href = '' }) {
  const fbRoot = React.createRef();

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

export default React.memo(FacebookPage);
