import { Container, TextField, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/axios";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const searchMovies = async () => {
      const res = await api.get(`/movies/search?query=${query}`);
      setMovies(res.data);
    };

    searchMovies();
  }, [query]);

  return (
    <Container sx={{ mt: 5 }}>
      <TextField
        fullWidth
        label="Search movies..."
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {movies.map((m) => (
          <Grid item xs={12} sm={6} md={3} key={m._id}>
            <MovieCard movie={m} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Search;
