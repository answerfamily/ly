import React, { useState, useCallback } from 'react';
import { Button } from './buttons';
import styled from '@emotion/styled';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px 20px 80px;

  z-index: 10000;
  overflow-y: auto;
`;

const Outside = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Dialog = styled.div`
  margin: 0 auto;
  width: 80vw;
  max-width: 320px;
  border-radius: 5px;

  color: #333;
  background: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  > img {
    width: 100%;
    border-radius: 5px;
  }
`;

const StartButton = styled(Button)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  padding: 20px 0;
`;

const Notice = styled.div`
  color: #8f53ff;
  margin: 16px;
  padding: 16px;
  border: 2px solid currentColor;
  border-radius: 3px;
`;

const TeacherIcon = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  font-size: 24px;

  width: 44px;
  height: 44px;
  line-height: 44px;
  border-radius: 44px;
  text-align: center;

  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 9999;

  &::before {
    content: '👩‍🏫';
  }
`;

function SendPageTutorial() {
  const [dismissed, setDismissed] = useState(false);

  const handleToggle = useCallback(() => {
    setDismissed(s => !s);
  }, [setDismissed]);

  if (dismissed) {
    return <TeacherIcon onClick={handleToggle} />;
  }

  return (
    <Backdrop>
      <Dialog>
        <img src={require('../images/p1.png')} alt="FB 陳情教學 1" />
        <Notice>
          如果按下「送出」後出現{' '}
          <img height="20" src={require('../images/confirm.png')} alt="確認" />
          ，代表同一時間可能有太多人一起私訊陳情。你可以選擇：
          <ul>
            <li>
              改到
              <a
                href="https://contact.hacktabl.org/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                備用網站
              </a>
              私訊，或者
            </li>
            <li>
              改在粉專公開留言（下面有教學
              <span role="img" aria-label="">
                👇
              </span>
              ）
            </li>
          </ul>
        </Notice>
        <img src={require('../images/p2.png')} alt="FB 陳情教學 2" />
      </Dialog>
      <StartButton onClick={handleToggle}>知道了，開始吧！</StartButton>
      <Outside onClick={handleToggle} />
    </Backdrop>
  );
}

export default SendPageTutorial;
