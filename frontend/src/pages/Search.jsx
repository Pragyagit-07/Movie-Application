import {
  Container,
  TextField,
  Grid,
  Typography,
  Box,
  CircularProgress
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/axios";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Load popular movies initially
useEffect(() => {
  const loadMovies = async () => {
    try {
      setLoading(true);
      const res = await api.get("/movies"); 
      setMovies(res.data.movies);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadMovies();
}, []);
 

  useEffect(() => {
  if (!query.trim()) return;

  const timeout = setTimeout(async () => {
    try {
      setLoading(true);
      // const res = await api.get(`/movies/search?query=${query}`);
      // setMovies(res.data); 
      const res = await api.get(`/movies/search?query=${query}`);
setMovies(res.data.movies);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, 500);

  return () => clearTimeout(timeout);
}, [query]);




  return (
    <Container sx={{ mt: 5 }}>
      <Typography
         variant="h4"
         sx={{ mb: 3, fontWeight: "bold", color: "#f5c518" }}
      >
        Search Movies 🎬
      </Typography>

      <TextField
        fullWidth
        placeholder="Search by title, overview, genre..."
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          backgroundColor: "#111",
          borderRadius: 2,
          input: { color: "white" },
        }}
      />
      {!query && (
  <Typography sx={{ mt: 3, color: "gray" }}>
    Start typing to search movies...
  </Typography>
)}


      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && movies.length === 0 && (
        <Typography sx={{ mt: 4, color: "gray" }}>
          No movies found 
        </Typography>
      )}

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



