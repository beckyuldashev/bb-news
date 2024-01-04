import { useTheme } from "../../context/ThemeContext";
import { formatDate } from "../../helpers/date/formatDate";

import darkThemeIcon from "../../assets/theme/dark.png";
import lightThemeIcon from "../../assets/theme/light.png";

import cl from "./Header.module.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${cl.header} container`}>
      <div className={cl.block}>
        <h1 className={cl.title}>BB NEWS</h1>
        <p>{formatDate(new Date())}</p>
      </div>

      <button
        className={cl.theme}
        style={{
          backgroundImage: `url(${isDark ? darkThemeIcon : lightThemeIcon})`,
        }}
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
