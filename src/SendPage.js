import React, { useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import AutoSizer from 'react-virtualized-auto-sizer';
import cogoToast from 'cogo-toast';

import Textarea from 'components/Textarea';
import FacebookPagePlugin from 'components/FacebookPagePlugin';
import { nl2br } from 'lib/text';

const Header = styled.header`
  position: absolute;
`;

const Container = styled.div`
  padding: 60px 20px 20px;
  min-height: 100vh;

  section {
    display: flex;
    flex-flow: column;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    max-width: 1280px;
    padding: 60px 40px 40px;
    margin: 0 auto;

    section {
      flex: 3;
      padding-left: 24px;
      &:first-of-type {
        flex: 2;
        padding-left: 0;
      }
    }
  }
`;

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

const PluginWrapper = styled.div`
  position: relative; /* for AutoSizer */
  flex: 1 1 60vh;

  border: 2px solid #ff9753;
  border-bottom: 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  .preload-iframe {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: auto;
  }
`;

const Hint = styled.div`
  display: flex;
  background: #ff9753;
  padding: 4px;
  border-top: 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 14px;

  span {
    margin: 0 1em 0 auto;
  }
`;

const FlexTextarea = styled(Textarea)`
  flex: 1;
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
  const textareaRef = useRef(null);
  const submitStepRef = useRef(null);

  const handleCopy = useCallback(() => {
    textareaRef.current.select();
    document.execCommand('copy');
    cogoToast.success(`「${msg.slice(0, 10)}⋯⋯」已複製到剪貼簿`, {
      position: 'bottom-center',
    });
    submitStepRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [textareaRef, submitStepRef]);

  const handleNext = useCallback(() => {
    submitStepRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    onNext();
  }, [submitStepRef, onNext, handleCopy]);

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
          <h1>
            <a href={pridewatchpage}>{name}</a>
          </h1>
          <h2>{position}</h2>
          <p>{nl2br(desc)}</p>
        </section>
        <section>
          <h1>1. 複製文字</h1>
          <FlexTextarea
            ref={textareaRef}
            placeholder="把陳情文字貼在這裡，方便複製貼上"
            onChange={e => onMsgChange(e.target.value)}
            value={msg}
            onClick={e => e.target.select()}
            rows={5}
          />
          <p>
            <BorderedButton onClick={handleCopy}>複製</BorderedButton>
          </p>
        </section>
        <section ref={submitStepRef}>
          <h1>2. 貼上並送出</h1>
          <PluginWrapper>
            <AutoSizer>
              {({ width, height }) => [
                <FacebookPagePlugin
                  key={currentIdx}
                  href={facebookpage}
                  width={width - 4 /* left/right border width */}
                  height={height - 2 /* top border width */}
                />,
                selectedLegislators[currentIdx + 1] && (
                  <FacebookPagePlugin
                    className="preload-iframe"
                    key={currentIdx + 1}
                    href={selectedLegislators[currentIdx + 1].facebookpage}
                    width={width - 4 /* left/right border width */}
                    height={height - 2 /* top border width */}
                  />
                ),
              ]}
            </AutoSizer>
          </PluginWrapper>
          <Hint>
            ＊ 記得要按「發送」才會送出唷！
            <span>↑↑</span>
          </Hint>
          <p>
            <Button onClick={handleNext}>下一位</Button>
          </p>
        </section>
      </Container>
    </>
  );
}

export default SendPage;
