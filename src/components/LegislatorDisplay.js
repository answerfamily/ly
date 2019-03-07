import React from 'react';
import styled from '@emotion/styled';
import Divider from 'components/Divider';

const LegislatorData = styled.article`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  /* hiding scrollbar */
  padding-right: 20px;
  margin-right: -20px;

  /* gradient appear & disappear */
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 6%,
    black 94%,
    transparent
  );
`;

const Footer = styled.footer`
  font-size: 12px;
  opacity: 0.88;
`;

function LegislatorDisplay({
  legislator: {
    name,
    pridewatchpage,
    position,
    description,
    party,
    area,
    religion,
    subarea,
    facebookpage,
  },
}) {
  return (
    <section
      style={{
        /* hiding scrollbar of LegislatorData */
        overflowX: 'hidden',
      }}
    >
      <h1>{name}</h1>
      <LegislatorData>
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
      </LegislatorData>
      <Footer>
        <Divider />
        <p style={{ marginBottom: 0 }}>
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
        </p>
      </Footer>
    </section>
  );
}

export default LegislatorDisplay;
