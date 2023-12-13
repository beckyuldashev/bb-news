import { useState } from "react";

export const useFilters = (initialState) => {
  const [filters, setFilters] = useState(initialState);

  const changeFilter = (prop, value) => {
    setFilters(prev => ({...prev, [prop]: value}))
  }

  return [filters, changeFilter]
}