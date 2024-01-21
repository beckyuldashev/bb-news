import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import Skeleton from '../Skeleton/Skeleton';

import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { CategoriesType } from '../../interfaces';

import cl from './Filters.module.css';

interface FiltersProps {
  selectedCategory: CategoriesType | null;
  keywords: string | number | readonly string[] | undefined;
  isNewsLoading: boolean;
}

const Filters = ({ selectedCategory, keywords, isNewsLoading }: FiltersProps) => {
  const { data, isLoading } = useGetCategoriesQuery(null);

  return (
    <div className={cl.filters}>
      {data?.categories ? (
        <Slider>
          <Categories
            categories={data?.categories}
            selectedCategory={selectedCategory}
            newsIsLoading={isNewsLoading}
            isLoading={isLoading}
          />
        </Slider>
      ) : (
        <Skeleton count={1} type="item" direction="row" />
      )}

      <Search keywords={keywords} />
    </div>
  );
};

export default Filters;
