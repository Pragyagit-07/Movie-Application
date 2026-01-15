import { Container, TextField, Grid, Typography } from "@mui/material";
import { useState } from "react";
import api from "../api/axios";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (value) => {
    setQuery(value);
    if (!value) {
      setMovies([]);
      return;
    }

    const res = await api.get(`/movies/search?query=${value}`);
    setMovies(res.data);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Search Movies
      </Typography>

      <TextField
        fullWidth
        label="Search by title or description"
        value={query}
        onChange={(e) => searchMovies(e.target.value)}
      />

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie._id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Search;
