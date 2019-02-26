import React, { useRef } from 'react';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding: 40px;
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
  const timeStr = ' 10 秒';

  return (
    <PageContainer>
      <header>
        <h1>我愛家・我聯絡</h1>
        <h2>平權立院鍵盤陳情</h2>
      </header>

      <section>
        <h3>想要跟委員們說什麼呢？</h3>
        <textarea value={msg} onChange={e => onMsgChange(e.target.value)} />
        <button
          type="button"
          onClick={() =>
            selectionSectionRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        >
          下一步
        </button>
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
          您選了 {selectedLegislatorIds.length} 名委員{doneStr}，大概要花
          {timeStr}。
        </p>
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
