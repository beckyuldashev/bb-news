import { Route, Routes } from 'react-router-dom';

import { useTheme } from './app/providers/ThemeProvider';
import Home from './pages/home/ui/Page';
import { Header } from './widgets/header/ui';

function App() {
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

export default App;
