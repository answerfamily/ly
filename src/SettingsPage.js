import React, { useRef, useCallback, useState } from 'react';
import styled from '@emotion/styled';

import MessageInput from './components/MessageInput';
import LegislatorSections from './components/LegislatorSections';
import SpinningIcon from './components/SpinningIcon';
import Divider from './components/Divider';

import useIntersectionObserver from './lib/useIntersectionObserver';
import StartButton from './components/StartButton';
import { BorderedButton, Button } from './components/buttons';
import MessageTemplates from './components/MessageTemplates';
import SendTypeSwitch from './components/SendTypeSwitch';
import Jumbotron from './components/Jumbotron';
import Emphasis from './components/Emphasis';

const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 80vw;
  transform: translate(-50%, -50%);
  padding: 40px;

  color: #333;
  background: #fff;
  box-shadow: 0 0 100px 50px #000;

  z-index: 10000;

  footer {
    margin-top: 2em;

    > button:first-of-type {
      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: 640px) {
    footer {
      display: flex;
      > button:first-of-type {
        margin: 0 12px 0 0;
      }
    }
  }
`;

function RedirectDialog() {
  const [isDismissed, setDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <Dialog>
      <h1>暫時搬家公告</h1>
      <p>
        目前「Facebook 私訊」功能
        <a
          href="https://developers.facebook.com/support/bugs/356561845208218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          有一些問題
        </a>
        ，因此希望大家移駕到<a href="https://contact.hacktabl.org">暫時網站</a>
        來陳情。
      </p>
      <footer>
        {/* eslint-disable-next-line no-script-url, jsx-a11y/anchor-is-valid */}
        <BorderedButton onClick={() => setDismissed(true)}>
          繼續使用
        </BorderedButton>
        <Button
          onClick={() => {
            window.location.href = 'https://contact.hacktabl.org';
          }}
        >
          換到新網站
        </Button>
      </footer>
    </Dialog>
  );
}

const PageContainer = styled.div`
  padding: 40px;
  max-width: 720px;
  margin: 0 auto;
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
  sendType = '',
  onSendTypeChange = () => {},
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

  const handleSelectionIntersect = useCallback(
    entries => {
      if (entries[0].isIntersecting) {
        setSelectionInView(true);
      } else {
        setSelectionInView(false);
      }
    },
    [setSelectionInView]
  );

  const handleMessageAdd = useCallback(
    selectedMsg => {
      onMsgChange(`${msg}\n\n${selectedMsg}`);
    },
    [msg, onMsgChange]
  );

  useIntersectionObserver(selectionSectionRef, handleSelectionIntersect);

  return (
    <PageContainer>
      <RedirectDialog />
      <Header />
      <section>
        <p>
          讓同志能以<Emphasis>婚姻</Emphasis>成家，就是「愛家」的表現。
          在平權法案通過之前，讓我們動動手指頭，不分異同地向立法委員們表達我們
          <Emphasis>希望讓同志可以結婚</Emphasis>的心聲吧！
        </p>
        <Divider />
        <h3>你想要怎麼陳情？</h3>
        <SendTypeSwitch value={sendType} onChange={onSendTypeChange} />

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
        <p
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: 0,
          }}
        >
          <span style={{ fontSize: 12, opacity: 0.88 }}>
            ＊ 不知如何下筆？參考
            <a
              href={process.env.REACT_APP_REFERENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              這些範例
            </a>
            ，加入你的個人背景與觀察（如：有同事是同志），會更有說服力唷！
          </span>
          <button
            style={{ flexShrink: 0, marginLeft: '8px' }}
            type="button"
            onClick={handleNextClick}
          >
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
          sendType={sendType}
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
          <a href="https://github.com/answerfamily/ly">開放原始碼</a>
          專案。若有任何問題或建議，請來信至{' '}
          <a href="mailto:cofacts@googlegroups.com">Cofacts 聯絡信箱</a>。
        </p>

        <p>
          資料來源：
          <a
            href="http://equallove.tw/articles/200"
            target="_blank"
            rel="noopener noreferrer"
          >
            婚姻平權大平台委員 FB 名冊
          </a>
          、
          <a
            href="https://www.pridewatch.tw/beta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PrideWatch Taiwan 同志人權立場觀測站
          </a>
          、
          <a
            href="https://github.com/g0v/ly-tel"
            target="_blank"
            rel="noopener noreferrer"
          >
            g0v 立委聯絡資訊專案
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
