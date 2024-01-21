import NewsList from '../NewsList/NewsList';
import Filters from '../Filters/Filters';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';

import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppSelector } from '../../store';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { TOTAL_PAGES } from '../../constants/constants';

import cl from './NewsByFilters.module.css';

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedValue = useDebounce(filters.keywords, 1000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    category: filters.category === 'all' ? null : filters.category,
    keywords: debouncedValue,
  });

  return (
    <section className={cl.section}>
      <Filters
        selectedCategory={filters.category}
        keywords={filters.keywords}
        isNewsLoading={isLoading}
      />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        isLoading={isLoading}>
        <NewsList news={news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
