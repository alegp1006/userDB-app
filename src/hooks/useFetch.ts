import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useFetch<T>(
  service: () => Promise<any>,
  state: T,
  setState: Dispatch<SetStateAction<T>>,
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await service();
      setState(response);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return;
      }

      const message = err instanceof Error ? err.message : "Error desconocido";
      setError(`Error al realizar la petición: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    state,
    loading,
    error,
    fetchData,
  };
}
