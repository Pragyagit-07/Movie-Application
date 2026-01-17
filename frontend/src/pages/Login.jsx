// import { Button, TextField, Container, Typography } from "@mui/material";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async () => {
//     await login(email, password);
//   };

//   return (
//     <Container sx={{ mt: 10 }}>
//       <Typography variant="h4">Login</Typography>
//       <TextField fullWidth label="Email"  variant="outlined"   margin="normal"   value={email} onChange={(e) => setEmail(e.target.value)} />
//       <TextField fullWidth label="Password" type="password"    variant="outlined"    value={password}

// onChange={(e) => setPassword(e.target.value)} sx={{ mt: 2 }} />
//       <Button variant="contained" sx={{ mt: 3 }} onClick={submit}>
//         Login
//       </Button>
//     </Container>
//   );
// };

// export default Login;



import {
  Button,
  TextField,
  Typography,
  Box,
  Paper
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await login(email, password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            width: 380,
            borderRadius: 4,
            background: "#111",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, textAlign: "center", color: "#f5c518" }}
          >
            🎬 Movie App Login
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            InputLabelProps={{ style: { color: "gray" } }}
            InputProps={{ style: { color: "white" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            InputLabelProps={{ style: { color: "gray" } }}
            InputProps={{ style: { color: "white" } }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              background: "linear-gradient(90deg, #f5c518, #ff9800)",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={submit}
          >
            Login
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;
