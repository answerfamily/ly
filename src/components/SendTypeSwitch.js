import React from 'react';
import styled from '@emotion/styled';

function SendTypeSwitch({ value = '', onChange = () => {}, ...props }) {
  return (
    <ul {...props}>
      <li
        className={value === 'fb' ? 'selected' : ''}
        onClick={() => onChange('fb')}
      >
        <h4>
          FB 粉專{' '}
          <span role="img" aria-label="">
            💬
          </span>
        </h4>
        <p>
          <span role="img" aria-label="優點">
            👍
          </span>{' '}
          方便快速、通勤時也能陳情！委員偶爾會親自閱讀
        </p>
        <p>
          <span role="img" aria-label="缺點">
            👎
          </span>{' '}
          回覆比例低、存在感低
        </p>
      </li>
      <li
        className={value === 'tel' ? 'selected' : ''}
        onClick={() => onChange('tel')}
      >
        <h4>
          電話{' '}
          <span role="img" aria-label="">
            📞
          </span>
        </h4>
        <p>
          <span role="img" aria-label="優點">
            👍
          </span>{' '}
          專人傾聽，多人陳情時很有感
        </p>
        <p>
          <span role="img" aria-label="缺點">
            👎
          </span>{' '}
          花時間、接電話的助理不一定會轉達
        </p>
      </li>
    </ul>
  );
}

export default styled(SendTypeSwitch)`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  h4 {
    margin: 0 0 0.5em;
  }

  li {
    padding: 16px;
    flex: 1 1 0;
    max-width: 240px;

    border: 2px solid #ff9753;
    border-left-width: 0;
    border-right-width: 0;

    color: #ff9753;
    cursor: pointer;

    &.selected {
      background: #ff9753;
      color: #fff;
    }
  }

  li:first-of-type {
    border-left-width: 2px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  li:last-of-type {
    border-right-width: 2px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;
