import { useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

import cl from './Search.module.css';

interface SearchProps {
  keywords: string | number | readonly string[] | undefined;
}

const Search = ({ keywords }: SearchProps) => {
  const dispatch = useAppDispatch();
  const changeFilter = (prop: string, value: string | number | readonly string[] | undefined) => {
    dispatch(setFilters({ prop, value }));
  };

  return (
    <div className={cl.search}>
      <input
        type="text"
        placeholder="Search..."
        className={cl.input}
        value={keywords}
        onChange={(e) => changeFilter('keywords', e.target.value)}
      />
    </div>
  );
};

export default Search;
