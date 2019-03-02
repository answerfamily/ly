import React from 'react';
import styled from '@emotion/styled';

const SECONDS_EACH_LEGISLATOR = 20;

const BreakOnSmallScreen = styled.br`
  @media screen and (min-width: 425px) {
    display: none;
  }
`;

/**
 * Start sending button on settings page
 *
 * @param {String[]} props.selectedLegislatorIds
 * @param {Object} props.doneLegislatorMap - id to true map
 * @param {function} props.onClick
 * @param {boolean} props.show - whether to show this button
 */
function StartButton({
  doneLegislatorMap,
  selectedLegislatorIds,
  onClick,
  show = false,
  className,
}) {
  const hasStarted = Object.keys(doneLegislatorMap).length > 0;
  const legislatorToSendCount = selectedLegislatorIds.filter(
    id => !doneLegislatorMap[id]
  ).length;

  const totalSeconds = SECONDS_EACH_LEGISLATOR * legislatorToSendCount;
  const timeStr =
    totalSeconds > 120
      ? ` ${Math.floor(totalSeconds / 60)} 分鐘`
      : ` ${totalSeconds} 秒`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${
        show && legislatorToSendCount > 0 ? 'show' : ''
      }`}
      ga-on="click"
      ga-event-category="send"
      ga-event-action="start"
      ga-event-label={hasStarted ? '繼續' : '開始'}
      ga-event-value={legislatorToSendCount}
    >
      <span>
        {hasStarted ? '繼續' : '開始'}向 {legislatorToSendCount} 位委員陳情{' '}
        <BreakOnSmallScreen />
        <small> (約需 {timeStr}) </small>
      </span>
    </button>
  );
}

export default styled(StartButton)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  left: 0;
  bottom: 0;
  width: 100%;
  padding: 24px;

  transform: translate(0, 100%);
  transition: transform 0.2s ease-out, background-color 0.2s;

  font-size: 20px;
  font-weight: bold;
  border-radius: 0;

  & > span {
    margin: 0 auto;
  }

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: transform 0.15s ease-out;
  }

  &:hover::after {
    transform: translate(8px, 0) rotate(45deg);
  }

  &.show {
    transform: translate(0, 0);
  }
`;
