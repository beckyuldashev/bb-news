import { CategoriesType } from '@/entities/category';

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string | number | readonly string[] | undefined;
}

export type SkeletonType = 'item' | 'banner';

export type DirectionType = 'row' | 'column';

export type ParamsType = Partial<IFilters>;
