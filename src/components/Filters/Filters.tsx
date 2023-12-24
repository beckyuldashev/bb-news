import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import Skeleton from "../Skeleton/Skeleton";

import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";

import cl from "./Filters.module.css";
import { CategoriesApiResponse, CategoriesType } from "../../interfaces";

interface FiltersProps {
  selectedCategory: CategoriesType | null;
  keywords: string | number | readonly string[] | undefined;
  changeFilter: (
    prop: string,
    value: string | number | readonly string[] | undefined
  ) => void;
  isNewsLoading: boolean;
}

const Filters = ({
  selectedCategory,
  keywords,
  changeFilter,
  isNewsLoading,
}: FiltersProps) => {
  const { data, isLoading } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={cl.filters}>
      {data?.categories ? (
        <Slider>
          <Categories
            categories={data?.categories}
            selectedCategory={selectedCategory}
            changeFilter={changeFilter}
            newsIsLoading={isNewsLoading}
            isLoading={isLoading}
          />
        </Slider>
      ) : (
        <Skeleton count={1} type="item" direction="row" />
      )}

      <Search keywords={keywords} changeFilter={changeFilter} />
    </div>
  );
};

export default Filters;
