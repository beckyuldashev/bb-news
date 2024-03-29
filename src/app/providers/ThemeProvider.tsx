import { ReactNode, createContext, useContext, useState } from 'react';

export interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }

  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
