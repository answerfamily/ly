import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const DURATION = 1; // seconds

function SpinningIcon({ icons = [], ...props }) {
  const [idx, setIdx] = useState(0);
  const iconCount = icons.length;

  useEffect(() => {
    const handle = setTimeout(() => {
      setIdx((idx + 1) % iconCount);
    }, DURATION * 1000);

    return () => clearTimeout(handle);
  }, [idx, iconCount]);

  return (
    <span key={idx} role="img" aria-label="Icon" {...props}>
      {icons[idx]}
    </span>
  );
}

const flip = keyframes`
  from {
    transform: perspective(400px) rotateY(90deg);
  }

  to {
    transform: perspective(400px) rotateY(-90deg);
  }
`;

export default styled(SpinningIcon)`
  font-size: 84px;
  line-height: 1;
  display: inline-block;
  transform: perspective(400px) rotateY(90deg);
  animation: ${flip} 1s cubic-bezier(0, 0.37, 1, 0.63);
`;
