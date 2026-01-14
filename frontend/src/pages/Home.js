import { useEffect, useState } from "react";
import API from "../services/api";
import { Grid, Select, MenuItem } from "@mui/material";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    API.get(`/movies?sortBy=${sortBy}`).then(res => setMovies(res.data));
  }, [sortBy]);

  return (
    <>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <MenuItem value="">None</MenuItem>
        <MenuItem value="title">Name</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="releaseDate">Release Date</MenuItem>
        <MenuItem value="duration">Duration</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {movies.map(movie => (
          <Grid item xs={12} md={4} key={movie._id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
