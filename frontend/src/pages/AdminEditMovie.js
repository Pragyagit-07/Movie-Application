import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { TextField, Button, Container, Typography } from "@mui/material";

const AdminEditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    API.get("/movies").then((res) => {
      const selected = res.data.find((m) => m._id === id);
      setMovie(selected);
    });
  }, [id]);

  const updateMovie = async () => {
    await API.put(`/movies/${id}`, movie);
    alert("Movie updated");
    navigate("/");
  };

  const deleteMovie = async () => {
    await API.delete(`/movies/${id}`);
    alert("Movie deleted");
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" mt={4}>
        Edit Movie
      </Typography>

      <TextField
        label="Title"
        fullWidth
        margin="normal"
        value={movie?.title || ""}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
      />

      <TextField
        label="Description"
        fullWidth
        margin="normal"
        value={movie?.description || ""}
        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
      />

      <TextField
        label="Rating"
        type="number"
        fullWidth
        margin="normal"
        value={movie?.rating || ""}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
      />

      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={updateMovie}>
        Update Movie
      </Button>

      <Button
        variant="outlined"
        color="error"
        fullWidth
        sx={{ mt: 2 }}
        onClick={deleteMovie}
      >
        Delete Movie
      </Button>
    </Container>
  );
};

export default AdminEditMovie;
