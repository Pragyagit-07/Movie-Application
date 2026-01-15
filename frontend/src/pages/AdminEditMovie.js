import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

const AdminEditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: "",
    duration: "",
    releaseDate: "",
  });

  useEffect(() => {
    api.get(`/movies/${id}`).then((res) => setMovie(res.data));
  }, [id]);

  const updateMovie = async () => {
    await api.put(`/movies/${id}`, movie);
    alert("Movie updated");
    navigate("/");
  };

  const deleteMovie = async () => {
    if (window.confirm("Delete this movie?")) {
      await api.delete(`/movies/${id}`);
      navigate("/");
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Edit Movie
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Title"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />

        <TextField
          label="Description"
          value={movie.description}
          onChange={(e) =>
            setMovie({ ...movie, description: e.target.value })
          }
        />

        <TextField
          label="Rating"
          value={movie.rating}
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        />

        <TextField
          label="Duration (min)"
          value={movie.duration}
          onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
        />

        <TextField
          label="Release Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={movie.releaseDate?.substring(0, 10)}
          onChange={(e) =>
            setMovie({ ...movie, releaseDate: e.target.value })
          }
        />

        <Button variant="contained" onClick={updateMovie}>
          Update Movie
        </Button>

        <Button variant="contained" color="error" onClick={deleteMovie}>
          Delete Movie
        </Button>
      </Stack>
    </Container>
  );
};

export default AdminEditMovie;
