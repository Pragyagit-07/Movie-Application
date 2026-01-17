// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/axios";

// const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     const res = await api.get("/movies");
//     setMovies(res.data.movies);
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <MovieContext.Provider value={{ movies, fetchMovies }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

// export const useMovies = () => useContext(MovieContext);

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
    const res = await api.get(`/movies?page=${pageNumber}`);
    setMovies(res.data.movies);
    setPage(res.data.currentPage);
    setTotalPages(res.data.totalPages);
    setLoading(false);
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
