import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";

import { TOTAL_PAGES } from "../../constants/constants";

import cl from "./NewsByFilters.module.css";

const NewsByFilters = ({ filters, changeFilter, news, isNewsLoading }) => {
  return (
    <section className={cl.section}>
      <Filters
        filters={filters}
        changeFilter={changeFilter}
        isNewsLoading={isNewsLoading}
      />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        changeFilter={changeFilter}
        isLoading={isNewsLoading}
      />

      <NewsList news={news} isLoading={isNewsLoading} />

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        changeFilter={changeFilter}
        isLoading={isNewsLoading}
      />
    </section>
  );
};

export default NewsByFilters;
