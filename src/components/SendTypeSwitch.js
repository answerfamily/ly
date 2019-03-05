import React from 'react';
import styled from '@emotion/styled';

function SendTypeSwitch({ value = '', onChange }) {
  return (
    <ul>
      <li className={value === 'facebook' ? 'selected' : ''}>
        <h4>Facebook</h4>
        <p>優：方便快速、通勤時也能陳情！委員偶爾會親自閱讀</p>
        <p>缺：回覆比例低、存在感低</p>
      </li>
      <li className={value === 'tel' ? 'selected' : ''}>
        <h4>電話</h4>
        <p>優：專人傾聽，多人陳情時很有感</p>
        <p>缺：花時間、接電話助理不一定會轉達</p>
      </li>
    </ul>
  );
}

export default styled(SendTypeSwitch)`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    padding: 30px;
    flex: 1 1 0;
    max-width: 144px;
  }
`;
