import { useEffect, useState } from "react"

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : null;

  useEffect(() => {
    (async() => {
      try {
        setIsLoading(true);
        const res = await fetchFunction(params);
        setData(res);
        setIsLoading(false);
      } catch (error) {
        setError(error)
      } 
    })()
  }, [fetchFunction, stringParams])

  return [data, isLoading, error];
}