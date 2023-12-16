import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { PAGE_SIZE } from "../../constants/constants";

import cl from "./Home.module.css";

const Home = () => {
  const [filters, changeFilter] = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  });

  const { debouncedValue } = useDebounce(filters.keywords, 1000);

  const [newsData, isNewsLoading] = useFetch(getNews, {
    page_number: filters.page_number,
    page_size: filters.page_size,
    category: filters.category === "all" ? null : filters.category,
    keywords: debouncedValue,
  });

  return (
    <div className={cl.home}>
      <LatestNews
        banners={newsData && newsData.news}
        isNewsLoading={isNewsLoading}
      />

      <NewsByFilters
        news={newsData && newsData.news}
        filters={filters}
        changeFilter={changeFilter}
        isNewsLoading={isNewsLoading}
      />
    </div>
  );
};

export default Home;
