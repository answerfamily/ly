import React from 'react';
import styled from '@emotion/styled';

function Divider({ content = '👨‍👨‍👧‍👦👨‍👩‍👧‍👦👩‍👩‍👧‍👦', ...props }) {
  return (
    <p {...props}>
      <span role="img" aria-label="Horizontal ruler">
        {content}
      </span>
    </p>
  );
}

export default styled(Divider)`
  margin: 40px 0;
  text-align: center;
  letter-spacing: 0.5em;
`;
