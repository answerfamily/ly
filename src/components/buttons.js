import styled from '@emotion/styled';

const Button = styled.button`
  width: 100%;
  font-size: 28px;
`;

const BorderedButton = styled(Button)`
  padding: 8px 0;
  border: 2px solid #ff5368;
  background: transparent;
  color: #ff5368;

  &:hover {
    color: #fff;
  }
`;

export { Button, BorderedButton };
