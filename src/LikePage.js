import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import LikeTargetList from './components/LikeTargetList';
import LikeTargetDateSelect from './components/LikeTargetDateSelect';
import Divider from './components/Divider';
import Jumbotron from './components/Jumbotron';
import Emphasis from './components/Emphasis';

function sortByDateThenLen(
  { date: dateLeft, len: lenLeft },
  { date: dateRight, len: lenRight }
) {
  if (+dateLeft !== +dateRight) {
    return dateRight - dateLeft;
  }

  return lenRight - lenLeft;
}

function convertRowsToLikeTargetsByDate(rows) {
  return rows
    .map(({ createdtime, ...row }) => ({
      date: new Date(createdtime.replace(/T.+$/, '')),
      ...row,
    }))
    .sort(sortByDateThenLen)
    .reduce((grouped, likeTarget) => {
      if (grouped.length === 0) return [[likeTarget]];

      const lastGroup = grouped[grouped.length - 1];
      if (+likeTarget.date === +lastGroup[0].date) {
        lastGroup.push(likeTarget);
        return grouped;
      }

      // Create new group
      grouped.push([likeTarget]);
      return grouped;
    }, []);
}

function LikePage({ className }) {
  const [likeTargetsByDate, setLikeTargetsByDate] = useState(null); // [[target1, target2], [target3, target4], ...]
  const [dateIdx, setDateIdx] = useState(0);
  const topRef = useRef(null);
  const handleNextClick = useCallback(() => {
    topRef.current.scrollIntoView(true);

    // Trigger page change after scrolling is done, so that it won't trigger too many lazy loaded iframes
    setTimeout(() => setDateIdx(idx => idx + 1), 10);
  }, [topRef, setDateIdx]);

  useEffect(() => {
    import('data/fb.json').then(({ default: { rows } }) =>
      setLikeTargetsByDate(convertRowsToLikeTargetsByDate(rows))
    );
  }, []);

  if (likeTargetsByDate === null) {
    return <section>Loading...</section>;
  }

  const currentLikeTargets = likeTargetsByDate[dateIdx];
  const currentDate = currentLikeTargets[0].date;

  const nextTargetCount = likeTargetsByDate[dateIdx + 1]
    ? likeTargetsByDate[dateIdx + 1].length
    : 0;

  return (
    <main className={className}>
      <Jumbotron>
        <h1>平權聲音讚出來</h1>
        <h2>一起來幫平權留言按讚吧！</h2>
      </Jumbotron>

      <p>
        婚姻平權相關法案在立院攻防的同時，立委們的臉書也
        <Emphasis>同時被挺同與反同洗版</Emphasis>。
      </p>
      <p>
        讓我們一起立委臉書裡，<Emphasis>挺平權的聲音按讚</Emphasis>
        、給願意發聲的平權夥伴一些鼓勵， 也讓看到立委 FB
        的人民知道，平權的聲音是有人挺的！
      </p>

      <Divider />

      <p ref={topRef}>
        <LikeTargetDateSelect
          likeTargetsByDate={likeTargetsByDate}
          value={dateIdx}
          onChange={setDateIdx}
        />
      </p>

      {/* Reset LikeTargetList state whenever date changes */}
      <LikeTargetList key={dateIdx} likeTargets={currentLikeTargets} />

      <Divider />

      <p>{currentDate.toLocaleDateString()} 的訊息都在上面囉！</p>

      <p>
        {nextTargetCount ? (
          <button onClick={handleNextClick}>
            繼續幫 {nextTargetCount} 則留言打氣
          </button>
        ) : (
          <p>沒有更舊的資料囉。謝謝願意幫平權的聲音打氣！</p>
        )}
      </p>
    </main>
  );
}

export default styled(LikePage)`
  padding: 16px;
  text-align: center;
`;
