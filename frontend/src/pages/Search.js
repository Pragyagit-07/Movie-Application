import { useState } from "react";
import API from "../services/api";
import { TextField, Button } from "@mui/material";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const res = await API.get(`/movies/search?q=${query}`);
    setMovies(res.data);
  };

  return (
    <>
      <TextField
        label="Search movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={searchMovies}>Search</Button>

      {movies.map(movie => (
        <div key={movie._id}>{movie.title}</div>
      ))}
    </>
  );
};

export default Search;
