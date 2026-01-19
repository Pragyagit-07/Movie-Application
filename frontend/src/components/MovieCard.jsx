// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const MovieCard = ({ movie }) => (
//   <motion.div whileHover={{ scale: 1.05 }}>
//     {/* <Card sx={{ borderRadius: 4 }}>
//       <CardMedia
//         component="img"
//         height="300"
//         image={movie.poster}
//       />
//       <CardContent>
//         <Typography variant="h6">{movie.title}</Typography>
//         <Typography variant="body2">
//           ⭐ {movie.rating}
//         </Typography>
//       </CardContent>
//     </Card> */}
//     <Card sx={{ borderRadius: 4, height: "100%" }}>
//   <CardMedia
//     component="img"
//     height="300"
//     image={movie.poster || "/no-poster.jpg"}
//   />
//   <CardContent>
//     <Typography variant="h6" noWrap>
//       {movie.title}
//     </Typography>
//     <Typography variant="body2" sx={{ opacity: 0.7 }}>
//       ⭐ {movie.rating} / 10
//     </Typography>
//     <Typography variant="caption" sx={{ opacity: 0.6 }}>
//       {movie.duration} min
//     </Typography>
//   </CardContent>
// </Card>

//   </motion.div>
// );

// export default MovieCard;



import { Card, CardMedia, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const MovieCard = ({ movie }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const deleteMovie = async () => {
    if (window.confirm("Delete this movie?")) {
      await api.delete(`/movies/${movie._id}`);
      window.location.reload();
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card sx={{ borderRadius: 4, position: "relative" }}>
        <CardMedia
          component="img"
          height="300"
          image={movie.poster}
        />

        {user?.role === "admin" && (
          <Box sx={{ position: "absolute", top: 8, right: 8 }}>
            <IconButton onClick={() => navigate(`/admin/edit/${movie._id}`)}>
              <Edit sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton onClick={deleteMovie}>
              <Delete sx={{ color: "#ff5252" }} />
            </IconButton>
          </Box>
        )}

        <CardContent>
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2">⭐ {movie.rating}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MovieCard;
