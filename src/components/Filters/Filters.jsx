import Categories from "../Categories/Categories";
import Search from "../Search/Search";

import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";

import cl from "./Filters.module.css";

const Filters = ({ filters, changeFilter, isNewsLoading }) => {
  const [categoriesData, isCategoriesLoading] = useFetch(getCategories);

  return (
    <div className={cl.filters}>
      <Categories
        categories={categoriesData.categories}
        selectedCategory={filters.category}
        changeFilter={changeFilter}
        newsIsLoading={isNewsLoading}
        isLoading={isCategoriesLoading}
      />

      <Search keywords={filters.keywords} changeFilter={changeFilter} />
    </div>
  );
};

export default Filters;
