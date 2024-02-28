import { ForwardedRef, forwardRef } from 'react';

import { useAppDispatch } from '@/app/appStore';
import { CategoriesType } from '@/entities/category';
import { setFilters } from '@/entities/news/model/newsSlice';

import cl from './Categories.module.css';

interface CategoriesProps {
  categories: CategoriesType[];
  selectedCategory: CategoriesType | null;
  newsIsLoading: boolean;
  isLoading: boolean;
}

const Categories = forwardRef(
  (
    { categories, selectedCategory, newsIsLoading }: CategoriesProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const dispatch = useAppDispatch();
    const changeFilter = (prop: string, value: string | number | readonly string[] | undefined) => {
      dispatch(setFilters({ prop, value }));
    };

    return (
      <div ref={ref} className={cl.categories}>
        <ul className={cl.list} role="list">
          <li className={cl.item}>
            <button
              disabled={newsIsLoading}
              className={selectedCategory === 'all' ? cl.btn + ' ' + cl.active : cl.btn}
              onClick={() => changeFilter('category', 'all')}>
              all
            </button>
          </li>
          {categories.map((category) => (
            <li key={category} className={cl.item}>
              <button
                disabled={newsIsLoading}
                className={category === selectedCategory ? cl.btn + ' ' + cl.active : cl.btn}
                onClick={() => changeFilter('category', category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

Categories.displayName = 'Categories';

export default Categories;
