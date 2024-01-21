import { IPaginationProps } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

import cl from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, isLoading }: IPaginationProps) => {
  const dispatch = useAppDispatch();

  const changeFilter = (prop: string, value: string | number | readonly string[] | undefined) => {
    dispatch(setFilters({ prop, value }));
  };

  return (
    <div className={cl.pagination}>
      <button
        disabled={currentPage === 1 || isLoading}
        className={cl.btn}
        onClick={() => changeFilter('page_number', currentPage - 1)}>
        {'<'}
      </button>
      <ul className={cl.list} role="list">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              disabled={isLoading}
              onClick={() => changeFilter('page_number', index + 1)}
              className={currentPage === index + 1 ? cl.btn + ' ' + cl.active : cl.btn}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === totalPages || isLoading}
        className={cl.btn}
        onClick={() => changeFilter('page_number', currentPage + 1)}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
