import 'intersection-observer'; // polyfill
import { useRef, useLayoutEffect } from 'react';

function useIntersectionObserver(elem = null, onView = () => {}) {
  const io = useRef(null);
  function disconnect() {
    if (io.current) {
      io.current.disconnect();
    }
  }
  useLayoutEffect(() => {
    if (io.current) {
      io.current.disconnect();
    }
    if (elem) {
      io.current = new IntersectionObserver(onView, {});
      io.current.observe(elem);
    }
    return disconnect;
  }, [elem, onView]);

  return disconnect;
}

export default useIntersectionObserver;
