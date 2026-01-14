import { useState } from "react";
import API from "../services/api";
import { TextField, Button } from "@mui/material";

const AdminAddMovie = () => {
  const [movie, setMovie] = useState({});

  const submit = async () => {
    await API.post("/movies", movie);
    alert("Movie added");
  };

  return (
    <>
      <TextField label="Title" onChange={e => setMovie({ ...movie, title: e.target.value })} />
      <TextField label="Description" onChange={e => setMovie({ ...movie, description: e.target.value })} />
      <TextField label="Rating" type="number" onChange={e => setMovie({ ...movie, rating: e.target.value })} />
      <Button onClick={submit}>Add Movie</Button>
    </>
  );
};

export default AdminAddMovie;
