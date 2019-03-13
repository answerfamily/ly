import React, { useState, useEffect } from 'react';
import FacebookEmbedPlugin from './components/FacebookEmbedPlugin';

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
  const [likeTargets, setLikeTargets] = useState(null);

  useEffect(() => {
    import('data/fb.json').then(({ default: { rows } }) =>
      setLikeTargets(
        rows
          .map(({ createdtime, ...row }) => ({
            date: new Date(createdtime.replace(/T.+$/, '')),
            ...row,
          }))
          .sort(sortByDateThenLen)
      )
    );
  }, []);

  if (likeTargets === null) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      {likeTargets.map(({ id, type }) => (
        <FacebookEmbedPlugin key={`${type}_${id}`} id={id} type={type} />
      ))}
    </section>
  );
}

export default LikePage;
