import { useTheme } from '@/app/providers/ThemeProvider';
import { darkThemeIcon, lightThemeIcon } from '@/shared';

import cl from './ThemeButton.module.css';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={cl.theme}
      style={{
        backgroundImage: `url(${isDark ? darkThemeIcon : lightThemeIcon})`,
      }}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
