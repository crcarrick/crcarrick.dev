import { useEffect, useState } from 'react';

// Basically Dan Abramov's blog implementation just using a hook
//
// TODO: this could be better.. if you prefer dark mode there's a quick
//       little flash of the light mode before it sets dark mode from local storage
export const useTheme = () => {
  const [_theme, _setTheme] = useState();

  const setTheme = (theme) => {
    _setTheme(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (err) {}
  };

  useEffect(() => {
    // Check if I have a local storage entry for theme
    let preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) {}

    // Check if user has prefers dark mode browser setting
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => mql.matches && setTheme('dark');
    mql.addEventListener('change', handleChange);

    setTheme(preferredTheme || (mql.matches ? 'dark' : 'light'));

    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return [_theme, setTheme];
};
