import { Button, TextField, Container, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await login(email, password);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4">Login</Typography>
      <TextField fullWidth label="Email"  variant="outlined"   margin="normal"   value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password"    variant="outlined"    value={password}

onChange={(e) => setPassword(e.target.value)} sx={{ mt: 2 }} />
      <Button variant="contained" sx={{ mt: 3 }} onClick={submit}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
