import React, { useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import LegislatorSections from './components/LegislatorSections';
import SpinningIcon from './components/SpinningIcon';
import Divider from './components/Divider';

const SECONDS_EACH_LEGISLATOR = 20;

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
    margin: 16px 0;
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

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 2px solid currentColor;
  background: rgba(255, 255, 255, 0.12);
  color: #ff9753;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  &:focus {
    background: transparent;
  }
`;

function SettingsPage({
  msg = '',
  onMsgChange = () => {},
  legislators = [],
  selectedLegislatorIds = [],
  doneLegislatorsMap = {},
  onSelectionChange = () => {},
  onSubmit = () => {},
}) {
  const selectionSectionRef = useRef(null);
  const hasStarted = Object.keys(doneLegislatorsMap).length > 0;
  const legislatorToSendCount = selectedLegislatorIds.filter(
    id => !doneLegislatorsMap[id]
  ).length;
  const doneStr = hasStarted
    ? `還有 ${legislatorToSendCount} 位委員要傳，`
    : '';

  const totalSeconds = SECONDS_EACH_LEGISLATOR * legislatorToSendCount;
  const timeStr =
    totalSeconds > 120
      ? ` ${Math.floor(totalSeconds / 60)} 分鐘`
      : ` ${totalSeconds} 秒`;

  const handleNextClick = useCallback(
    () =>
      selectionSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [selectionSectionRef]
  );

  return (
    <PageContainer>
      <Jumbotron>
        <SpinningIcon icons={['🏠', '👨‍👨‍👧‍👦', '🏠', '👩‍👩‍👧‍👦', '🏠', '👨‍👩‍👧‍👦']} />
        <h1>
          我<Emphasis>愛家</Emphasis>・我聯絡
        </h1>
        <h2>平權立院鍵盤陳情</h2>
      </Jumbotron>

      <section>
        <p>
          讓同志能以<Emphasis>婚姻</Emphasis>成家，就是「愛家」的表現。
          在平權法案通過之前，讓我們動動手指頭，不分異同地向立法委員們表達我們
          <Emphasis>希望讓同志可以結婚</Emphasis>的心聲吧！
        </p>
        <Divider />
        <label>
          <h3>你想要跟委員們說什麼呢？</h3>
          <Textarea
            value={msg}
            onChange={e => onMsgChange(e.target.value)}
            rows={5}
          />
        </label>
        <button type="button" onClick={handleNextClick}>
          下一步
        </button>
        <Divider />
      </section>

      <section ref={selectionSectionRef}>
        <h3>請選擇要陳情的立委</h3>
        <button
          type="button"
          onClick={() => onSelectionChange(legislators.map(({ id }) => id))}
        >
          全選啦！
        </button>
        <p>
          您選了 {selectedLegislatorIds.length} 名委員{doneStr}，大概花
          {timeStr}就能傳完。
        </p>
        <LegislatorSections
          legislators={legislators || []}
          selectedLegislatorIds={selectedLegislatorIds}
          doneLegislatorsMap={doneLegislatorsMap}
          onSelectionChange={onSelectionChange}
        />
        <button
          type="button"
          onClick={onSubmit}
          disabled={legislatorToSendCount === 0}
        >
          {hasStarted ? '繼續' : '開始'}陳情
        </button>
      </section>
    </PageContainer>
  );
}

export default SettingsPage;
