import { useLayoutEffect, useState } from 'react';

// Basically Dan Abramov's blog implementation just using a hook
//
// TODO: this could be better.. if you prefer dark mode there's a quick
//       little flash of the light mode before it sets dark mode from local storage
export const useMode = () => {
  const [_mode, _setMode] = useState();

  const setMode = (mode) => {
    _setMode(mode);
    try {
      localStorage.setItem('mode', mode);
    } catch (err) {}
  };

  useLayoutEffect(() => {
    let preferredMode;
    try {
      preferredMode = localStorage.getItem('mode');
    } catch (err) {}

    const mql = window.matchMedia('(prefers-color-mode: dark)');
    const handleChange = () => mql.matches && setMode('dark');
    mql.addEventListener('change', handleChange);

    setMode(preferredMode || (mql.matches ? 'dark' : 'light'));

    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return [_mode, setMode];
};
