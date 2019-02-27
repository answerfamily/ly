import React from 'react';
import styled from '@emotion/styled';

import FacebookPagePlugin from 'components/FacebookPagePlugin';
import { nl2br } from 'lib/text';

const PageContainer = styled.div`
  display: flex;
  padding: 40px;

  section {
    flex: 1;
    padding-left: 24px;
    &:first-of-type {
      padding-left: 0;
    }
  }
`;

const Button = styled.button`
  font-size: 32px;
`;

const Note = styled.textarea`
  width: 100%;
  height: 100%;
`;

function SendPage({
  msg = '',
  currentIdx = 0 /* -1 when done */,
  selectedLegislators = [],

  onMsgChange = () => {},
  onNext = () => {},
  onBack = () => {},
}) {
  if (currentIdx === -1) {
    return <div>都做完囉！謝謝您 m(_ _)m</div>;
  }

  const {
    name,
    pridewatchpage,
    position,
    desc,
    facebookpage,
  } = selectedLegislators[currentIdx];

  return (
    <PageContainer>
      <section>
        <Note
          placeholder="把陳情文字貼在這裡，方便複製貼上"
          onChange={e => onMsgChange(e.target.value)}
          value={msg}
          onClick={e => e.target.select()}
        />
      </section>
      <section>
        <FacebookPagePlugin href={facebookpage} />
      </section>
      <section>
        <h1>
          <a href={pridewatchpage}>{name}</a>
        </h1>
        <h2>{position}</h2>
        <p>{nl2br(desc)}</p>
        <Button onClick={onNext}>下一位 》</Button>
      </section>
    </PageContainer>
  );
}

export default SendPage;
