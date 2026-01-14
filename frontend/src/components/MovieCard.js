import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const role = localStorage.getItem("role");

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {movie.description}
        </Typography>
        <Typography sx={{ mt: 1 }}>⭐ Rating: {movie.rating}</Typography>
        <Typography>⏱ Duration: {movie.duration} min</Typography>

        {role === "admin" && (
          <Button
            component={Link}
            to={`/admin/edit/${movie._id}`}
            variant="outlined"
            sx={{ mt: 2 }}
          >
            Edit
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
