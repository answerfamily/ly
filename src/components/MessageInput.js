import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 2px solid currentColor;
  background-color: rgba(255, 255, 255, 0.12);
  color: #ff9753;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    outline: 0;
  }
`;

function MessageInput(props) {
  const { value } = props;

  const handleBlur = useCallback(() => {
    window.ga('set', 'dimension1', value); // message
  }, [value]);

  return <TextArea {...props} onBlur={handleBlur} />;
}

export default MessageInput;
