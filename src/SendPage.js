import React from 'react';
import styled from '@emotion/styled';
import AutoSizer from 'react-virtualized-auto-sizer';

import Textarea from 'components/Textarea';
import FacebookPagePlugin from 'components/FacebookPagePlugin';
import { nl2br } from 'lib/text';

const Header = styled.header``;

const Container = styled.div`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    max-width: 720px;
    padding: 20px;
    margin: 0 auto;

    section {
      flex: 1;
      padding-left: 24px;
      &:first-of-type {
        padding-left: 0;
      }
    }
  }
`;

const Button = styled.button`
  font-size: 32px;
`;

const PluginWrapper = styled.div`
  position: relative; /* for AutoSizer */
  height: 60vh;

  .preload-iframe {
    position: absolute;
    opacity: 0;
    left: 0;
    z-index: -1;
  }
`;

function SendPage({
  msg = '',
  currentIdx = 0 /* -1 when done */,
  selectedLegislators = [],

  onMsgChange = () => {},
  onPrev = () => {},
  onNext = () => {},
  onBack = () => {},
}) {
  if (currentIdx === -1) {
    return <div>都做完囉！謝謝您 m(_ _)m</div>;
  }

  if (!selectedLegislators || !selectedLegislators[currentIdx]) {
    return null;
  }

  const {
    name,
    pridewatchpage,
    position,
    desc,
    facebookpage,
  } = selectedLegislators[currentIdx];

  return (
    <>
      <Header>
        <button onClick={onBack}>Back</button>
        {currentIdx + 1} / {selectedLegislators.length}
      </Header>
      <Container>
        <section>
          <h1>1. 複製文字</h1>
          <Textarea
            placeholder="把陳情文字貼在這裡，方便複製貼上"
            onChange={e => onMsgChange(e.target.value)}
            value={msg}
            onClick={e => e.target.select()}
          />
        </section>
        <section>
          <h1>2. 貼上並送出</h1>
          <PluginWrapper>
            <AutoSizer>
              {({ width, height }) => [
                <FacebookPagePlugin
                  key={currentIdx}
                  href={facebookpage}
                  width={width}
                  height={height}
                />,
                selectedLegislators[currentIdx + 1] && (
                  <FacebookPagePlugin
                    className="preload-iframe"
                    key={currentIdx + 1}
                    href={selectedLegislators[currentIdx + 1].facebookpage}
                    width={width}
                    height={height}
                  />
                ),
              ]}
            </AutoSizer>
          </PluginWrapper>
        </section>
        <section>
          <h1>
            <a href={pridewatchpage}>{name}</a>
          </h1>
          <h2>{position}</h2>
          <p>{nl2br(desc)}</p>
          <Button onClick={onNext}>下一位 》</Button>
        </section>
      </Container>
    </>
  );
}

export default SendPage;
