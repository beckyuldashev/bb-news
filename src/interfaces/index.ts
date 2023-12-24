export interface INews {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: CategoriesType[];
  published: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string | number | readonly string[] | undefined;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  changeFilter: (
    prop: string,
    value: string | number | readonly string[] | undefined
  ) => void;
}

export type SkeletonType = "item" | "banner";

export type DirectionType = "row" | "column";

export type ParamsType = Partial<IFilters>;

export type CategoriesType =
  | "all"
  | "regioanl"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
