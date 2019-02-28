import React, { useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import AutoSizer from 'react-virtualized-auto-sizer';
import cogoToast from 'cogo-toast';

import Textarea from 'components/Textarea';
import Divider from 'components/Divider';
import FacebookPagePlugin from 'components/FacebookPagePlugin';

const Header = styled.header`
  position: fixed;
  background: rgba(0, 0, 0, 0.88);
  -webkit-backdrop-filter: blur(16px);

  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;

  span {
    margin: 0 auto;
  }
`;

const HeaderProgress = styled.div`
  position: absolute;
  z-index: -1;
  background: #7ed321;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;

  transition: width 0.75s ease-out;
`;

const Back = styled.div`
  display: flex;
  align-items: center;

  padding-left: 16px;
  opacity: 0.5;
  transition: opacity 0.2s;

  cursor: pointer;
  font-size: 14px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;
  }
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

const NextButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    margin-left: 16px;
    content: '';
    width: 16px;
    height: 16px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: transform 0.15s ease-out;
  }

  &:hover::after {
    transform: translate(8px, 0) rotate(45deg);
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

const Footer = styled.footer`
  font-size: 12px;
  opacity: 0.88;
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
    textareaRef.current.blur();
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
    description,
    party,
    area,
    religion,
    subarea,
    facebookpage,
  } = selectedLegislators[currentIdx];

  return (
    <>
      <Header>
        <Back onClick={onBack}>設定立委</Back>
        <span>
          {currentIdx + 1} / {selectedLegislators.length}
        </span>
        <HeaderProgress
          style={{
            width: `${(
              (100 * (currentIdx + 1)) /
              selectedLegislators.length
            ).toFixed(2)}%`,
          }}
        />
      </Header>
      <Container>
        <section>
          <h1>{name}</h1>
          <p>{position}</p>
          {description && (
            <ul style={{ padding: 0 }}>
              {description.split('\n').map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          )}
          <p>
            {party}・{area}
            {subarea ? `／${subarea}` : null}
          </p>
          {religion ? <p>{religion}</p> : null}
          <p>
            <a href={pridewatchpage} target="_blank" rel="noopener noreferrer">
              PrideWatch 頁面
            </a>
          </p>
          <Divider />
          <Footer style={{ marginTop: 'auto' }}>
            <p>
              資料來源：
              <a
                href="https://www.pridewatch.tw/beta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PrideWatch Taiwan 同志人權立場觀測站
              </a>
            </p>
          </Footer>
        </section>
        <section>
          <h1>1. 複製文字</h1>
          <FlexTextarea
            ref={textareaRef}
            placeholder="把陳情文字貼在這裡，方便複製貼上"
            onChange={e => onMsgChange(e.target.value)}
            value={msg}
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
            <NextButton onClick={handleNext}>下一位</NextButton>
          </p>
        </section>
      </Container>
    </>
  );
}

export default SendPage;
