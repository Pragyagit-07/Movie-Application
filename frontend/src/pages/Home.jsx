import { Grid, Container, Typography, Pagination, Stack } from "@mui/material";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, page, totalPages, setPage, loading } = useMovies();

  if (loading) {
    return (
      <Typography sx={{ textAlign: "center", mt: 10 }}>
        Loading movies...
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
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

      {/* Pagination */}
      <Stack alignItems="center" sx={{ mt: 5 }}>
        <Typography sx={{ mb: 1, color: "gray" }}>
          Page {page} of {totalPages}
        </Typography>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="large"
          showFirstButton
          showLastButton
          siblingCount={1}
          boundaryCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 2,
              mx: 0.4,
              minWidth: 42,
              height: 42,
            },
            "& .Mui-selected": {
              backgroundColor: "#e91e63 !important",
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </Container>
  );
};

export default Home;
