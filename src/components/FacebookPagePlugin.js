import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';

import waitForFB from 'lib/waitForFB';

const DEFAULT_TABS = ['timeline', 'messages'];

const Cover = styled.div`
  background: #ff9753;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`;

function FacebookPagePlugin({
  className = '',
  tabs = DEFAULT_TABS,
  href = '',
  width = 320,
  height = 500,
  onParsed = null, // callback on layout being parsed
  profile = '',
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

  if (!href) {
    return (
      <Cover className={className} style={{ width, height }}>
        <p>無法顯示這位委員的粉絲專頁。</p>

        {profile ? (
          <p>
            請至
            <a href={profile} target="_blank" rel="noopener noreferrer">
              委員的個人檔案
            </a>
            頁面留言。
          </p>
        ) : (
          <p>請直接下一位。</p>
        )}
      </Cover>
    );
  }

  return (
    <div ref={fbRoot} className={className}>
      <div
        className="fb-page"
        data-href={href}
        data-tabs={tabs.join(',')}
        data-small-header="false"
        data-adapt-container-width="false"
        data-show-facepile="false"
        data-hide-cta="false"
        data-width={width}
        data-height={height}
      />
    </div>
  );
}

export default React.memo(FacebookPagePlugin);
