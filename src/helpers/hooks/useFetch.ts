import { useEffect, useState } from "react";

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFunction: FetchFunction<P, T>,
  params?: P
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : null;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetchFunction(params);
        setData(res);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};
