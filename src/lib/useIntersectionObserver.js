import 'intersection-observer'; // polyfill
import { useRef, useLayoutEffect } from 'react';

function useIntersectionObserver(elemRef, onView = () => {}) {
  const io = useRef(null);
  function disconnect() {
    if (io.current) {
      io.current.disconnect();
    }
  }
  useLayoutEffect(() => {
    disconnect();
    if (elemRef.current) {
      io.current = new IntersectionObserver(onView, {});
      io.current.observe(elemRef.current);
    }
    return disconnect;
  }, [elemRef, onView]);

  return disconnect;
}

export default useIntersectionObserver;
