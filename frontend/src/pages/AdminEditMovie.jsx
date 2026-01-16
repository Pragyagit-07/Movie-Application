import { useEffect, useState } from "react";
import { Container, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const AdminEditMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    api.get(`/movies/${id}`).then((res) => setMovie(res.data));
  }, [id]);

  const update = async () => {
    await api.put(`/movies/${id}`, movie);
    alert("Updated");
  };

  const remove = async () => {
    await api.delete(`/movies/${id}`);
    alert("Deleted");
  };

  return (
    <Container sx={{ mt: 5 }}>
      {Object.keys(movie).map((key) => (
        <TextField
          key={key}
          value={movie[key]}
          label={key}
          fullWidth
          sx={{ mt: 2 }}
          onChange={(e) =>
            setMovie({ ...movie, [key]: e.target.value })
          }
        />
      ))}

      <Button onClick={update} sx={{ mt: 2 }}>
        Update
      </Button>
      <Button color="error" onClick={remove} sx={{ mt: 2 }}>
        Delete
      </Button>
    </Container>
  );
};

export default AdminEditMovie;
