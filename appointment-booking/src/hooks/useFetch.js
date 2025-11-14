import { useEffect, useState } from "react";
import { fetchApi } from "../utils/fetchApi";

const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function getData() {
      try {
        const response = await fetchApi(endpoint, options);
        if (isMounted) setData(response);
      } catch (err) {
        if (isMounted) setError(err.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    getData();
    return () => (isMounted = false);
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
