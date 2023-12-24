import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initialState: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialState);

  const changeFilter = (
    prop: string,
    value: string | number | readonly string[] | undefined
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  return { filters, changeFilter };
};
