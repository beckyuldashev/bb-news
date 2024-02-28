import { useAppSelector } from '@/app/appStore';
import Filters from '@/pages/home/ui/Filters/Filters';
import { NewsList } from '@/widgets/news/ui';
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TOTAL_PAGES } from '@/shared/constants/constants';

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
