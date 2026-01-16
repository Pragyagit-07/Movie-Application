import { Container, TextField, Button, Typography } from "@mui/material";
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
    alert("Movie added");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Add Movie</Typography>

      {Object.keys(movie).map((key) => (
        <TextField
          key={key}
          label={key}
          fullWidth
          sx={{ mt: 2 }}
          onChange={(e) =>
            setMovie({ ...movie, [key]: e.target.value })
          }
        />
      ))}

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={submit}
      >
        Add Movie
      </Button>
    </Container>
  );
};

export default AdminAddMovie;
