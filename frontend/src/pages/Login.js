import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token, res.data.role);
      navigate("/");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ my: 3 }}>
        Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        label="Email"
        sx={{ my: 1 }}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        type="password"
        label="Password"
        sx={{ my: 1 }}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={submit}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
