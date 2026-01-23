import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (pageNumber = 1) => {
    setLoading(true);
    try {
    
    const res = await api.get(`/api/movies?page=${pageNumber}`);

    setMovies(res.data.movies);
    setPage(res.data.currentPage);
    setTotalPages(res.data.totalPages);
  } catch (err) {
    console.error("failed to reach movies", err);
  } finally{
    setLoading(false);
  }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <MovieContext.Provider
      value={{ movies, page, totalPages, setPage, loading }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
