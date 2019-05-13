import React, { useRef, useCallback, useState, Fragment } from 'react';
import styled from '@emotion/styled';
import useIntersectionObserver from '../lib/useIntersectionObserver';
import FacebookEmbedPlugin from './FacebookEmbedPlugin';

const TARGET_PER_SECTION = 5;
const PLACEHOLDER_HEIGHT_PER_TARGET = 120;

const Footer = styled.footer`
  margin: 4px 0 24px;
  font-size: 12px;

  button {
    background: transparent;
    padding: 0;
    color: #53baff;
  }
`;

/**
 * @param {string} id
 * @param {string} type
 * @return {function} callback
 */
function sendLikeShowEvent(id, type) {
  return () => {
    window.ga('send', 'event', 'like', 'show', `${type}/${id}`);
  };
}

function sendReport(id) {
  return () => {
    if (
      // eslint-disable-next-line no-restricted-globals
      !confirm(
        '有時我們確實會誤判一則訊息為「平權訊息」。請問您要回報這則訊息「不是平權訊息」嗎？'
      )
    ) {
      return;
    }

    window.Rollbar.info(`Message not promoting gay marriage: ${id}`);
    alert('感謝您的回報，我們會儘速處理。');
  };
}

function LikeTargetSection({
  likeTargets = [],
  show = false,
  onVisible = () => {},
}) {
  const sectionRef = useRef(null);
  let disconnect;
  const handleView = useCallback(
    entries => {
      if (entries[0].isIntersecting) {
        disconnect();
        onVisible();
      }
    },
    [disconnect, onVisible]
  );
  disconnect = useIntersectionObserver(sectionRef, handleView);

  return (
    <section
      ref={sectionRef}
      style={
        show
          ? {}
          : { height: PLACEHOLDER_HEIGHT_PER_TARGET * likeTargets.length }
      }
    >
      {show
        ? likeTargets.map(({ id, type }) => (
            <Fragment key={`${type}_${id}`}>
              <FacebookEmbedPlugin
                id={id}
                type={type}
                onParsed={sendLikeShowEvent(id, type)}
              />
              <Footer>
                <a
                  href={`https://www.facebook.com/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  無法載入請點此
                </a>
                ・<button onClick={sendReport(id)}>這不是平權訊息</button>
              </Footer>
            </Fragment>
          ))
        : null}
    </section>
  );
}

function LikeTargetList({ likeTargets }) {
  const [showIdx, setShowIdx] = useState(0);

  const likeTargetSections = likeTargets.reduce((sections, likeTarget) => {
    if (sections.length === 0) {
      return [[likeTarget]];
    }
    const lastSection = sections[sections.length - 1];
    if (lastSection.length < TARGET_PER_SECTION) {
      lastSection.push(likeTarget);
      return sections;
    }

    sections.push([likeTarget]);
    return sections;
  }, []);

  const handleSectionVisible = useCallback(() => {
    setShowIdx(idx => idx + 1);
  }, [setShowIdx]);

  return (
    <>
      {likeTargetSections.map((section, idx) => (
        <LikeTargetSection
          key={idx}
          likeTargets={section}
          show={idx <= showIdx}
          onVisible={handleSectionVisible}
        />
      ))}
    </>
  );
}

export default LikeTargetList;
