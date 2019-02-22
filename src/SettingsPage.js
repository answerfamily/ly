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
  onSelectionChange = () => {},
}) {
  const selectionSectionRef = useRef(null);

  return (
    <PageContainer>
      <header>
        <h1>我愛家・我聯絡</h1>
        <h2>平權立院鍵盤陳情</h2>
      </header>

      <section>
        <h3>想要跟立委們說什麼呢？</h3>
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
        test
      </section>
    </PageContainer>
  );
}

export default SettingsPage;
