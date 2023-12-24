import { formatDate } from "../../helpers/date/formatDate";

import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.block}>
        <h1 className={cl.title}>BB NEWS</h1>
        <p>{formatDate(new Date())}</p>
      </div>
    </header>
  );
};

export default Header;
