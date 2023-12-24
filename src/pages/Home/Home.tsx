import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

import cl from "./Home.module.css";

const Home = () => {
  return (
    <div className={cl.home}>
      <LatestNews />

      <NewsByFilters />
    </div>
  );
};

export default Home;
