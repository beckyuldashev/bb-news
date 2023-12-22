import NewsList from "../NewsList/NewsList";
import Filters from "../Filters/Filters";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

import cl from "./NewsByFilters.module.css";

const NewsByFilters = () => {
  const [filters, changeFilter] = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  });

  const { debouncedValue } = useDebounce(filters.keywords, 1000);

  const [data, isLoading] = useFetch(getNews, {
    page_number: filters.page_number,
    page_size: filters.page_size,
    category: filters.category === "all" ? null : filters.category,
    keywords: debouncedValue,
  });

  return (
    <section className={cl.section}>
      <Filters
        filters={filters}
        changeFilter={changeFilter}
        isNewsLoading={isLoading}
      />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        changeFilter={changeFilter}
        isLoading={isLoading}
      >
        <NewsList news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
