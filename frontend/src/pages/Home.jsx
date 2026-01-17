// import { Grid, Container, Typography } from "@mui/material";
// import { useMovies } from "../context/MovieContext";
// import MovieCard from "../components/MovieCard";

// const Home = () => {
//   const { movies } = useMovies();

//   return (
    
//     <Container maxWidth="xl" sx={{ mt: 5 }}>

//       <Typography variant="h4" gutterBottom>
//         Top Movies
//       </Typography>
//       <Grid container spacing={3}>
//         {movies.map((m) => (
//           <Grid item xs={12} sm={6} md={3} key={m._id}>
//             <MovieCard movie={m} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Home;


import { Grid, Container, Typography, Pagination, Stack } from "@mui/material";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, page, totalPages, setPage } = useMovies();

  return (
     <Container maxWidth="xl" sx={{ mt: 5 }}>

     {/* <Container sx={{ mt: 5 }}> */}
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
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="large"
          color="secondary"
        />
      </Stack>
    </Container>
  );
};

export default Home;
