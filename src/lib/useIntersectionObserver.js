import 'intersection-observer'; // polyfill
import { useRef, useLayoutEffect } from 'react';

function useIntersectionObserver(elem = null, onView = () => {}) {
  const io = useRef(null);

  useLayoutEffect(() => {
    if (io.current) {
      io.current.disconnect();
    }
    if (elem) {
      io.current = new IntersectionObserver(onView, {});
      io.current.observe(elem);
    }
  }, [elem, onView]);
}

export default useIntersectionObserver;
