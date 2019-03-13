import React, { useState, useEffect } from 'react';
import FacebookEmbedPlugin from './components/FacebookEmbedPlugin';
import LikeTargetDateSelect from './components/LikeTargetDateSelect';

function sortByDateThenLen(
  { date: dateLeft, len: lenLeft },
  { date: dateRight, len: lenRight }
) {
  if (+dateLeft !== +dateRight) {
    return dateRight - dateLeft;
  }

  return lenRight - lenLeft;
}

function LikePage() {
  const [likeTargetsByDate, setLikeTargetsByDate] = useState(null); // [[target1, target2], [target3, target4], ...]
  const [dateIdx, setDateIdx] = useState(0);

  useEffect(() => {
    import('data/fb.json').then(({ default: { rows } }) =>
      setLikeTargetsByDate(
        rows
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
          }, [])
      )
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
    <main>
      <LikeTargetDateSelect
        likeTargetsByDate={likeTargetsByDate}
        value={dateIdx}
        onChange={setDateIdx}
      />

      {currentLikeTargets.map(({ id, type }) => (
        <FacebookEmbedPlugin key={`${type}_${id}`} id={id} type={type} />
      ))}

      <hr />

      <p>{currentDate.toLocaleDateString()} 的訊息都在上面囉！</p>

      {nextTargetCount ? (
        <button onClick={() => setDateIdx(idx => idx + 1)}>
          來按 {nextTargetCount} 則前一天的訊息
        </button>
      ) : (
        <p>沒有更舊的資料了。謝謝您！</p>
      )}
    </main>
  );
}

export default LikePage;
