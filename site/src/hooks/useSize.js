import { useEffect, useState } from 'react';

import { breakpoint } from '@utils/mixins';

export const useSize = () => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    const md = window.matchMedia(breakpoint.md);
    const lg = window.matchMedia(breakpoint.lg);

    const onChange = () => {
      let sz = null;

      if (md.matches) sz = breakpoint.md;
      if (lg.matches) sz = breakpoint.lg;

      setSize(sz);
    };

    md.addEventListener('change', onChange);
    lg.addEventListener('change', onChange);

    return () => {
      md.removeEventListener('change', onChange);
      lg.removeEventListener('change', onChange);
    };
  }, []);

  return size;
};
