import { useState, useEffect } from "react";

const BASE_URL = "https://fakestoreapi.com";

export function useFetchProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataStore = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let fetchData = await response.json();
        setData(fetchData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDataStore();
  }, []);

  return { data, loading, error };
}
