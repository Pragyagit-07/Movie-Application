import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Card>
      <CardMedia component="img" height="300" image={movie.poster} />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">⭐ {movie.rating}</Typography>
      </CardContent>
    </Card>
  </motion.div>
);

export default MovieCard;
