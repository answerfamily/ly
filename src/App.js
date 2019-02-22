import React, { useState } from 'react';
import styled from '@emotion/styled';

import FacebookPage from 'components/FacebookPage';
import { nl2br } from 'lib/text';

const DATA = [
  {
    area: '不分區',
    party: '國民黨',
    name: '王金平',
    prideWatchPage: 'https://www.pridewatch.tw/beta/people/wangjp',
    position: '支持同婚',
    desc:
      '2016同性婚姻草案<許毓仁版>連署人(2016/10/24)\n『目前政府極力推動落實兩公約，他認為應將同志人權視為兩公約的延伸，也理解與會者的主張，但他身為立法院長，應維持中立，不能有立場。』（2014年2月）\n接受同志團體陳情，「同志婚姻的確是人權問題」（2014年2月）\n「多元成家的議題還沒有到社會接受的階段」（2013年）',
    facebookPage: 'https://www.facebook.com/jingping.tw/',
  },
  {
    area: '不分區',
    party: '民進黨',
    name: '尤美女',
    prideWatchPage: 'https://www.pridewatch.tw/beta/people/yumn',
    position: '支持同婚',
    desc: '挺同婚（2013年）',
    facebookPage: 'https://www.facebook.com/yumeinu/',
  },
  {
    area: '新竹市',
    party: '民進黨',
    name: '柯建銘',
    prideWatchPage: 'https://www.pridewatch.tw/beta/people/kejm',
    position: '反對同婚',
    desc:
      '「黨內傾向立專法」(2016/11/29)\n任職第8屆司法及法制委員會時並無表態或出席（2014年）\n曾簽署下一代幸福的問卷調查，反對同婚（2013年）',
    facebookPage: 'https://www.facebook.com/kerchenming/',
  },
];

const Wrapper = styled.div`
  display: flex;
  padding: 40px;

  section {
    flex: 1;
    padding-left: 24px;
    &:first-child {
      padding-left: 0;
    }
  }
`;

const Button = styled.button`
  font-size: 32px;
`;

const Note = styled.textarea`
  width: 100%;
  height: 100%;
`;

function App() {
  const [idx, setIdx] = useState(0);

  const { name, prideWatchPage, position, desc, facebookPage } = DATA[idx];

  return (
    <Wrapper>
      <section>
        <Note
          placeholder="把陳情文字貼在這裡，方便複製貼上"
          onClick={e => e.target.select()}
        />
      </section>
      <section>
        <FacebookPage href={facebookPage} />
      </section>
      <section>
        <h1>
          <a href={prideWatchPage}>{name}</a>
        </h1>
        <h2>{position}</h2>
        <p>{nl2br(desc)}</p>
        <Button onClick={() => setIdx((idx + 1) % DATA.length)}>
          下一位 》
        </Button>
      </section>
    </Wrapper>
  );
}

export default App;
