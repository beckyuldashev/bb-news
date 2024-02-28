import { ThemeButton } from '@/features/theme';
import { formatDate } from '@/shared';

import cl from './Header.module.css';

const Header = () => {
  return (
    <header className={`${cl.header} container`}>
      <div className={cl.block}>
        <h1 className={cl.title}>BB NEWS</h1>
        <p>{formatDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
};

export default Header;
