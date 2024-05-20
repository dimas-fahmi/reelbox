import { useState, useEffect } from "react";
import { useTMDB } from "../context/TMDBContext";

const useTMDBData = (initialEndpoint) => {
  const { fetchTMDBData } = useTMDB();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endpoint, setEndpoint] = useState(initialEndpoint);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchTMDBData(endpoint);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint, fetchTMDBData]);

  return { data, loading, error, setEndpoint };
};

export default useTMDBData;
