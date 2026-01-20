import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Box
} from "@mui/material";
import { useState } from "react";
import api from "../api/axios";

const AdminAddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    poster: "",
    rating: "",
    duration: "",
    releaseDate: "",
  });

  const submit = async () => {
    await api.post("/movies", movie);
    alert("Movie added successfully 🎉");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={10} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
           Add New Movie
        </Typography>

        <Typography variant="body2" sx={{ color: "gray", mb: 3 }}>
          Fill in the details below to add a new movie to the platform.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Movie Title"
              fullWidth
              value={movie.title}
              onChange={(e) =>
                setMovie({ ...movie, title: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rows={3}
              fullWidth
              value={movie.description}
              onChange={(e) =>
                setMovie({ ...movie, description: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Rating (0–10)"
              type="number"
              fullWidth
              value={movie.rating}
              onChange={(e) =>
                setMovie({ ...movie, rating: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Duration (minutes)"
              type="number"
              fullWidth
              value={movie.duration}
              onChange={(e) =>
                setMovie({ ...movie, duration: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Release Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={movie.releaseDate}
              onChange={(e) =>
                setMovie({ ...movie, releaseDate: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Poster Image URL"
              fullWidth
              value={movie.poster}
              onChange={(e) =>
                setMovie({ ...movie, poster: e.target.value })
              }
            />
          </Grid>

          {/*  Poster Preview */}
          {movie.poster && (
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <img
                  src={movie.poster}
                  alt="Poster Preview"
                  style={{
                    maxHeight: 300,
                    borderRadius: 12,
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 4,
            py: 1.3,
            fontSize: 16,
            fontWeight: "bold",
          }}
          onClick={submit}
        >
          ➕ Add Movie
        </Button>
      </Paper>
    </Container>
  );
};

export default AdminAddMovie;
