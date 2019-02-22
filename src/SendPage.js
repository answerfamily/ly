import React, { useState } from 'react';
import styled from '@emotion/styled';

import FacebookPagePlugin from 'components/FacebookPagePlugin';
import { nl2br } from 'lib/text';

const Wrapper = styled.div`
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

function SendPage({ selectedLegislators = [] }) {
  const [idx, setIdx] = useState(0);
  const {
    name,
    prideWatchPage,
    position,
    desc,
    facebookPage,
  } = selectedLegislators[idx];

  return (
    <Wrapper>
      <section>
        <Note
          placeholder="把陳情文字貼在這裡，方便複製貼上"
          onClick={e => e.target.select()}
        />
      </section>
      <section>
        <FacebookPagePlugin href={facebookPage} />
      </section>
      <section>
        <h1>
          <a href={prideWatchPage}>{name}</a>
        </h1>
        <h2>{position}</h2>
        <p>{nl2br(desc)}</p>
        <Button onClick={() => setIdx((idx + 1) % selectedLegislators.length)}>
          下一位 》
        </Button>
      </section>
    </Wrapper>
  );
}

export default SendPage;
