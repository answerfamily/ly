import React, { useLayoutEffect, useRef } from 'react';

import waitForFB from 'lib/waitForFB';

const DEFAULT_TABS = ['messages', 'timeline'];

function FacebookPagePlugin({
  className = '',
  tabs = DEFAULT_TABS,
  href = '',
  width = 320,
  height = 500,
  onParsed = null, // callback on layout being parsed
}) {
  const fbRoot = useRef(null);

  useLayoutEffect(() => {
    waitForFB.then(() => {
      window.FB.XFBML.parse(fbRoot.current, () => {
        if (onParsed) {
          onParsed({ width, height });
        }
      });
    });
  }, [tabs, href, width, height]);

  return (
    <div ref={fbRoot} className={className}>
      <div
        className="fb-page"
        data-href={href}
        data-tabs={tabs.join(',')}
        data-small-header="true"
        data-adapt-container-width="false"
        data-show-facepile="false"
        data-hide-cta="true"
        data-width={width}
        data-height={height}
      />
    </div>
  );
}

export default React.memo(FacebookPagePlugin);