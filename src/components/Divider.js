import React from 'react';
import styled from '@emotion/styled';

function Divider(props) {
  return (
    <p {...props}>
      <span role="img" aria-label="Horizontal ruler">
        👨‍👨‍👧‍👦👨‍👩‍👧‍👦👩‍👩‍👧‍👦
      </span>
    </p>
  );
}

export default styled(Divider)`
  margin: 40px 0;
  text-align: center;
  letter-spacing: 0.5em;
`;
