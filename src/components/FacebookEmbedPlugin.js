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
  margin: 16px 0;
  text-align: center; /* inner div will become inline-block by Facebook JS */

  .fb-comment-embed {
    background: #fff;
    border-radius: 4px;
  }
`);
