import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import { getCategories, getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

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

  const [categoriesData, isCategoriesLoading] = useFetch(getCategories);

  return (
    <div className={cl.home}>
      <Categories
        categories={categoriesData.categories}
        selectedCategory={filters.category}
        changeFilter={changeFilter}
        newsIsLoading={isNewsLoading}
        isLoading={isCategoriesLoading}
      />

      <Search keywords={filters.keywords} changeFilter={changeFilter} />

      <NewsBanner
        newsItem={newsData && newsData.news && newsData.news[0]}
        isLoading={isNewsLoading}
      />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        changeFilter={changeFilter}
        isLoading={isNewsLoading}
      />

      <NewsList news={newsData && newsData.news} isLoading={isNewsLoading} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        changeFilter={changeFilter}
        isLoading={isNewsLoading}
      />
    </div>
  );
};

export default Home;
