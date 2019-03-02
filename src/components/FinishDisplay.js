import React from 'react';
import styled from '@emotion/styled';
import { BorderedButton } from './buttons';

import SpinningIcon from './SpinningIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding: 60px 20px 20px;
  min-height: 100vh;
`;

function FinishDisplay({ onBack }) {
  return (
    <Container>
      <SpinningIcon icons={['🏳️‍🌈', '🙇‍♀️', '🙇‍♂️']} />
      <p>完成囉！謝謝您 m(_ _)m</p>
      <p>
        <BorderedButton style={{ padding: 16, fontSize: 16 }} onClick={onBack}>
          回首頁
        </BorderedButton>
      </p>
    </Container>
  );
}

export default FinishDisplay;
