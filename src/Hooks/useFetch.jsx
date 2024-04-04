import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=55cd7f45053e81aab59f5da7a430f8ad&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
