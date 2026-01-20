import { useEffect, useState } from "react";
import {
  Container,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  CircularProgress
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

const AdminEditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await api.get(`/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        alert("Failed to load movie");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const update = async () => {
    try {
      await api.put(`/movies/${id}`, movie);
      alert("Movie updated");
      navigate("/");
    } catch (err) {
      alert("Update failed");
    }
  };

  const remove = async () => {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    try {
      await api.delete(`/movies/${id}`);
      alert("Movie deleted");
      navigate("/");
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!movie) return null;

  return (
    <Container sx={{ mt: 6 }}>
      <Paper
        elevation={10}
        sx={{
          p: 4,
          maxWidth: 700,
          mx: "auto",
          borderRadius: 4,
          background: "#111",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#f5c518", mb: 3 }}
        >
          🎬 Edit Movie
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Title"
            value={movie.title || ""}
            onChange={(e) =>
              setMovie({ ...movie, title: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Description"
            value={movie.description || ""}
            multiline
            rows={4}
            onChange={(e) =>
              setMovie({ ...movie, description: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Poster URL"
            value={movie.poster || ""}
            onChange={(e) =>
              setMovie({ ...movie, poster: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Rating"
            type="number"
            value={movie.rating || ""}
            onChange={(e) =>
              setMovie({ ...movie, rating: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Duration (minutes)"
            type="number"
            value={movie.duration || ""}
            onChange={(e) =>
              setMovie({ ...movie, duration: e.target.value })
            }
            fullWidth
          />

          <TextField
            label="Release Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={movie.releaseDate?.slice(0, 10) || ""}
            onChange={(e) =>
              setMovie({ ...movie, releaseDate: e.target.value })
            }
            fullWidth
          />
        </Stack>

        {/* ACTION BUTTONS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(90deg,#f5c518,#ff9800)",
              color: "#000",
              fontWeight: "bold",
            }}
            onClick={update}
          >
            Update Movie
          </Button>

          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={remove}
          >
            Delete Movie
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default AdminEditMovie;
