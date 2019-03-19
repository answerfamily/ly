import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';

import waitForFB from 'lib/waitForFB';

function getUrl(type, id) {
  switch (type) {
    case 'comment': {
      const [postId, commentId] = id.split('_');
      return `https://www.facebook.com/${postId}/?comment_id=${commentId}`;
    }

    case 'post': {
      const [pageId, visitorPostId] = id.split('_');
      return `https://www.facebook.com/${pageId}/posts/${visitorPostId}`;
    }

    default:
      throw new Error('unrecognized type');
  }
}

function FacebookEmbedPlugin({
  id = '',
  type = 'comment',
  onParsed = () => {},
  className,
}) {
  const fbRoot = useRef(null);

  useLayoutEffect(() => {
    waitForFB.then(() => {
      window.FB.XFBML.parse(fbRoot.current, () => {
        if (onParsed) {
          onParsed({ id, type });
        }
      });
    });
  }, []);

  return (
    <div ref={fbRoot} className={className}>
      <div
        className={`fb-${type === 'comment' ? 'comment-embed' : 'post'}`}
        data-href={getUrl(type, id)}
      />
    </div>
  );
}

export default React.memo(styled(FacebookEmbedPlugin)`
  /* avoid totally collapse when not loaded */
  min-width: 150px;
  min-height: 120px;
  text-align: center; /* inner div will become inline-block by Facebook JS */

  > div {
    position: relative; /* for loading mask */

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.88);
      pointer-events: none;
      transition: opacity 0.8s;
      z-index: 1;
    }

    &[fb-xfbml-state='rendered']::before {
      opacity: 0;
    }
  }

  .fb-comment-embed,
  .fb-post {
    background: #fff;
    border-radius: 4px;
  }
`);
