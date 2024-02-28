import { Routes, Route } from 'react-router-dom';

import { Home } from '@/pages/home';

import Header from '@/widgets/header/ui/Header/Header';
import { useTheme } from '../providers/ThemeProvider';

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default BaseLayout;
