import React, { useRef, useCallback, useState } from 'react';
import styled from '@emotion/styled';

import MessageInput from './components/MessageInput';
import LegislatorSections from './components/LegislatorSections';
import SpinningIcon from './components/SpinningIcon';
import Divider from './components/Divider';

import useIntersectionObserver from './lib/useIntersectionObserver';
import StartButton from './components/StartButton';
import MessageTemplates from './components/MessageTemplates';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 720px;
  margin: 0 auto;
`;

const Jumbotron = styled.header`
  text-align: center;
  padding: 30px 0;

  h1 {
    font-size: 28px;
    font-weight: normal;
    letter-spacing: 0.125em;
    margin: 24px 0 16px;
    @media screen and (min-width: 425px) {
      font-size: 40px;
    }
  }

  h2 {
    margin: 0;
    font-size: 14px;
    letter-spacing: 0.5em;
    font-weight: 200;
  }
`;

const Emphasis = styled.em`
  color: #8f53ff;
  font-style: normal;
`;

const Header = React.memo(() => (
  <Jumbotron>
    <SpinningIcon icons={['🏠', '👨‍👨‍👧‍👦', '🏠', '👩‍👩‍👧‍👦', '🏠', '👨‍👩‍👧‍👦']} />
    <h1>
      我<Emphasis>愛家</Emphasis>・我聯絡
    </h1>
    <h2>平權立院鍵盤陳情</h2>
  </Jumbotron>
));

const Footer = styled.footer`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding-bottom: 64px;
`;

function SettingsPage({
  msg = '',
  onMsgChange = () => {},
  legislators = [],
  selectedLegislatorIds = [],
  doneLegislatorMap = {},
  onSelectionChange = () => {},
  onSubmit = () => {},
}) {
  const selectionSectionRef = useRef(null);
  const [isSelectionInView, setSelectionInView] = useState(false);

  const handleNextClick = useCallback(
    () =>
      selectionSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [selectionSectionRef]
  );

  const handleSelectionIntersect = useCallback(entries => {
    if (entries[0].isIntersecting) {
      setSelectionInView(true);
    } else {
      setSelectionInView(false);
    }
  });

  const handleMessageAdd = useCallback(
    selectedMsg => {
      onMsgChange(`${msg}\n\n${selectedMsg}`);
    },
    [msg, onMsgChange]
  );

  useIntersectionObserver(
    selectionSectionRef.current,
    handleSelectionIntersect
  );

  return (
    <PageContainer>
      <Header />
      <section>
        <p>
          讓同志能以<Emphasis>婚姻</Emphasis>成家，就是「愛家」的表現。
          在平權法案通過之前，讓我們動動手指頭，不分異同地向立法委員們表達我們
          <Emphasis>希望讓同志可以結婚</Emphasis>的心聲吧！
        </p>
        <Divider />
        <label>
          <h3>你想要跟委員們說什麼呢？</h3>
          <MessageTemplates onSelect={handleMessageAdd} />
          <MessageInput
            value={msg}
            onChange={e => onMsgChange(e.target.value)}
            rows={5}
            autoFocus
          />
        </label>
        <p style={{ textAlign: 'right', margin: 0 }}>
          <button type="button" onClick={handleNextClick}>
            下一步
          </button>
        </p>
      </section>

      <section ref={selectionSectionRef}>
        <Divider />
        <h3>請選擇要陳情的立委</h3>
        <LegislatorSections
          legislators={legislators || []}
          selectedLegislatorIds={selectedLegislatorIds}
          doneLegislatorMap={doneLegislatorMap}
          onSelectionChange={onSelectionChange}
        />
        <StartButton
          show={isSelectionInView}
          selectedLegislatorIds={selectedLegislatorIds}
          doneLegislatorMap={doneLegislatorMap}
          onClick={onSubmit}
        />
      </section>
      <Footer>
        <Divider content="🏳️‍🌈" />

        <p>
          此工具為
          <a href="https://www.facebook.com/groups/answerfamily/">
            《我愛家我解惑 - 平權社會對話工程》社群
          </a>
          參與者提供之
          <a href="https://github.com/answerfamily/ly">開放原始碼</a>專案。
        </p>

        <p>
          資料來源：
          <a
            href="https://www.pridewatch.tw/beta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PrideWatch Taiwan 同志人權立場觀測站
          </a>
          、
          <a
            href="http://equallove.tw/articles/200"
            target="_blank"
            rel="noopener noreferrer"
          >
            婚姻平權大平台委員 FB 名冊
          </a>
        </p>

        <p>
          Background icons:{' '}
          <a
            href="https://thenounproject.com/nookfulloption/collection/space2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Space2
          </a>{' '}
          by Nook Fulloption from the Noun Project
        </p>
      </Footer>
    </PageContainer>
  );
}

export default SettingsPage;
