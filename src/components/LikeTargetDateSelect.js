import React, { useCallback, memo } from 'react';
import styled from '@emotion/styled';

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

export default memo(styled(LikeTargetDateSelect)`
  font-size: 24px;
  padding: 8px 16px;
`);
