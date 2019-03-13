import React, { useCallback, memo } from 'react';

function LikeTargetDateSelect({ likeTargetsByDate, onChange, value }) {
  const handleChange = useCallback(e => onChange(+e.target.value), [onChange]);

  return (
    <select onChange={handleChange} value={value}>
      {likeTargetsByDate.map((likeTargets, idx) => (
        <option key={idx} value={idx}>
          {likeTargets[0].date.toLocaleDateString()} ({likeTargets.length} 則)
        </option>
      ))}
    </select>
  );
}

export default memo(LikeTargetDateSelect);
