// import { Card, CardMedia, CardContent, Typography, Box, IconButton } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const MovieCard = ({ movie }) => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const deleteMovie = async () => {
//     if (window.confirm("Delete this movie?")) {
//       await api.delete(`/api/movies/${movie._id}`);
//       window.location.reload();
//     }
//   };

//   return (
//     <motion.div whileHover={{ scale: 1.05 }}>
//       <Card sx={{ borderRadius: 4, position: "relative" }}>
//         <CardMedia
//           component="img"
//           height="300"
//           image={movie.poster}
//         />

//         {user?.role === "admin" && (
//           <Box sx={{ position: "absolute", top: 8, right: 8 }}>
//             <IconButton onClick={() => navigate(`/api/admin/edit/${movie._id}`)}>
//               <Edit sx={{ color: "#fff" }} />
//             </IconButton>
//             <IconButton onClick={deleteMovie}>
//               <Delete sx={{ color: "#ff5252" }} />
//             </IconButton>
//           </Box>
//         )}

//         <CardContent>
//           <Typography variant="h6">{movie.title}</Typography>
//           <Typography variant="body2">⭐ {movie.rating}</Typography>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default MovieCard;


import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
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
      await api.delete(`/api/movies/${movie._id}`);
      // better UX: no reload, backend pagination will refetch
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.04 }}>
      <Card
        sx={{
          borderRadius: 4,
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* FIXED IMAGE RATIO */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "150%", // 2:3 poster ratio
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={movie.poster}
            alt={movie.title}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* ADMIN ACTIONS (HOVER ONLY) */}
          {user?.role === "admin" && (
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                display: "flex",
                gap: 1,
                opacity: 0,
                transition: "opacity 0.3s ease",
                ".MuiCard-root:hover &": {
                  opacity: 1,
                },
              }}
            >
              <IconButton
                size="small"
                onClick={() => navigate(`/admin/edit/${movie._id}`)}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                }}
              >
                <Edit sx={{ color: "#fff" }} />
              </IconButton>

              <IconButton
                size="small"
                onClick={deleteMovie}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                }}
              >
                <Delete sx={{ color: "#ff5252" }} />
              </IconButton>
            </Box>
          )}
        </Box>

        <CardContent>
          <Typography
            variant="h6"
            noWrap
            title={movie.title}
            sx={{ fontWeight: "bold" }}
          >
            {movie.title}
          </Typography>

          <Typography variant="body2" sx={{ mt: 0.5 }}>
            ⭐ {movie.rating}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MovieCard;
