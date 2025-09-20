import { useState, useEffect } from "react";
import { apiFetch } from "../utilities/fetcher";

export const usePosts = (page = 1, itemsPerPage = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    apiFetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [page, itemsPerPage]);

  return { data, loading, error };
};
