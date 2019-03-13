import React, { useRef, useCallback, useState } from 'react';
import useIntersectionObserver from '../lib/useIntersectionObserver';
import FacebookEmbedPlugin from './FacebookEmbedPlugin';

const TARGET_PER_SECTION = 5;
const PLACEHOLDER_HEIGHT_PER_TARGET = 120;

function LikeTargetSection({
  likeTargets = [],
  show = false,
  onVisible = () => {},
}) {
  const sectionRef = useRef(null);
  const handleView = useCallback(
    entries => {
      if (entries[0].isIntersecting) {
        disconnect();
        onVisible();
      }
    },
    [onVisible]
  );
  const disconnect = useIntersectionObserver(sectionRef.current, handleView);

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
            <FacebookEmbedPlugin key={`${type}_${id}`} id={id} type={type} />
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
    setShowIdx(idx => console.log('show idx increase!', idx) || idx + 1);
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
