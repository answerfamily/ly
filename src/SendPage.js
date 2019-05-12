import React, { useRef, useCallback, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AutoSizer from 'react-virtualized-auto-sizer';

import useLegislatorContactData from 'lib/useLegislatorContactData';

import MessageInput from 'components/MessageInput';
import FacebookPagePlugin from 'components/FacebookPagePlugin';
import LegislatorDisplay from 'components/LegislatorDisplay';
import ContactDisplay from 'components/ContactDisplay';
import FinishDisplay from 'components/FinishDisplay';
import { Button } from 'components/buttons';
import CopyButton from './components/CopyButton';
import SendPageTutorial from './components/SendPageTutorial';

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

  z-index: 1; /* higher than other positioned contents */

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
    height: 100vh;
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

const NextButton = styled(Button, {
  shouldForwardProp() {
    return true;
  },
})`
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
  background: #ff9753;
  padding: 4px;
  border-top: 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 14px;
}
`;

function SendPage({
  msg = '',
  currentIdx = 0 /* -1 when done */,
  selectedLegislators = [],
  sendType = '',

  onMsgChange = () => {},
  onPrev = () => {},
  onNext = () => {},
  onBack = () => {},
}) {
  const submitStepRef = useRef(null);
  const getContactByName = useLegislatorContactData();

  // Set after plugin is parsed.
  // This fixes the height of plugin on mobile so that window height change caused by browser footer
  // or keyboard would not affect the component height after it's loaded.
  //
  // In the mean time, it does not affect desktop because desktop's height is determined
  // by row flexbox.
  //
  const [pluginHeight, setPluginHeight] = useState(null);

  const handleNext = useCallback(() => {
    submitStepRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    onNext();
  }, [submitStepRef, onNext]);

  const handleCopy = useCallback(() => {
    submitStepRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [submitStepRef]);

  useEffect(() => {
    // Scroll to top when changing to send page
    window.scrollTo(0, 0);
  }, []);

  if (currentIdx === -1) {
    // Show finish screen
    return <FinishDisplay onBack={onBack} />;
  }

  // Data not loaded yet
  if (!selectedLegislators || !selectedLegislators[currentIdx]) {
    return null;
  }

  const {
    name,
    facebookpage,
    facebookprofile,
    feedonly,
    cannotload,
  } = selectedLegislators[currentIdx];

  return (
    <>
      {sendType === 'fb' && <SendPageTutorial />}
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
        <LegislatorDisplay legislator={selectedLegislators[currentIdx]} />
        <section>
          <h1>{sendType === 'fb' ? '1. 複製文字' : '1. 備好講稿'}</h1>
          <MessageInput
            style={{ flex: 1 }}
            placeholder="把陳情文字貼在這裡，方便複製貼上"
            onChange={e => onMsgChange(e.target.value)}
            value={msg}
            rows={5}
          />
          {sendType === 'fb' && (
            <p style={{ marginBottom: 0 }}>
              <CopyButton onCopy={handleCopy} text={msg} />
            </p>
          )}
        </section>
        <section ref={submitStepRef}>
          <h1>{sendType === 'fb' ? '2. 貼上並送出' : '2. 拿起話筒撥打'}</h1>
          {sendType === 'fb' ? (
            <>
              <PluginWrapper
                style={
                  pluginHeight
                    ? {
                        height: pluginHeight,
                        flexBasis: 'auto',
                      } /* fix height of PluginWrapper */
                    : {}
                }
              >
                <AutoSizer>
                  {({ width, height }) => [
                    <FacebookPagePlugin
                      key={currentIdx}
                      href={cannotload ? null : facebookpage}
                      profile={facebookprofile}
                      width={width - 4 /* left/right border width */}
                      height={height - 2 /* top border width */}
                      onParsed={({ height }) =>
                        setPluginHeight(height + 2 /* top border width */)
                      }
                    />,
                    selectedLegislators[currentIdx + 1] && (
                      <FacebookPagePlugin
                        className="preload-iframe"
                        key={currentIdx + 1}
                        href={
                          selectedLegislators[currentIdx + 1].cannotload
                            ? null
                            : selectedLegislators[currentIdx + 1].facebookpage
                        }
                        profile={
                          selectedLegislators[currentIdx + 1].facebookprofile
                        }
                        width={width - 4 /* left/right border width */}
                        height={height - 2 /* top border width */}
                      />
                    ),
                  ]}
                </AutoSizer>
              </PluginWrapper>
              <Hint>
                {feedonly
                  ? '＊ 請挑選一篇貼文回應'
                  : '＊ 請挑選一篇貼文回應，或點「訊息」私訊'}
              </Hint>
            </>
          ) : (
            getContactByName && (
              <ContactDisplay contacts={getContactByName(name)} />
            )
          )}

          <p style={{ marginBottom: 0 }}>
            <NextButton
              ga-on="click"
              ga-event-category="send"
              ga-event-action="submit"
              ga-event-label={name}
              onClick={handleNext}
            >
              下一位
            </NextButton>
          </p>
        </section>
      </Container>
    </>
  );
}

export default SendPage;
