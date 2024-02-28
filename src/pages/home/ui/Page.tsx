import LatestNews from './LatestNews/LatestNews';
import NewsByFilters from './NewsByFilters/NewsByFilters';

import cl from './Home.module.css';

const Home = () => {
  return (
    <div className={cl.home}>
      <LatestNews />

      <NewsByFilters />
    </div>
  );
};

export default Home;
