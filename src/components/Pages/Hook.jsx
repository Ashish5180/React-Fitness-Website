import { useState, useEffect } from 'react';

const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, inView];
};

export default useInView;
