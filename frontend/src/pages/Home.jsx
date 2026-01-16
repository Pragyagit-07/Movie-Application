import { Grid, Container, Typography } from "@mui/material";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies } = useMovies();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        🎬 Top Movies
      </Typography>
      <Grid container spacing={3}>
        {movies.map((m) => (
          <Grid item xs={12} sm={6} md={3} key={m._id}>
            <MovieCard movie={m} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
