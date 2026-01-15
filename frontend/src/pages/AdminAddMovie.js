import { TextField, Button, Container } from "@mui/material";
import { useState } from "react";
import api from "../api/axios";

const AdminAddMovie = () => {
  const [movie, setMovie] = useState({ title: "", rating: "" });

  const submit = async () => {
    await api.post("/movies", movie);
    alert("Movie Added");
  };

  return (
    <Container>
      <TextField label="Title" onChange={e => setMovie({ ...movie, title: e.target.value })} />
      <TextField label="Rating" onChange={e => setMovie({ ...movie, rating: e.target.value })} />
      <Button onClick={submit}>Add</Button>
    </Container>
  );
};

export default AdminAddMovie;
