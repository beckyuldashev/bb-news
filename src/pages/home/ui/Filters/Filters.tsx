import Slider from '@/features/slider/ui/Slider/Slider';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { CategoriesType } from '@/entities/category';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';

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
