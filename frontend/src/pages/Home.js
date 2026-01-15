import { Button, TextField, Container } from "@mui/material";
import { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const submit = async () => {
    const { data } = await api.post("/auth/login", { email, password });
    login(data.token, data.role);
  };

  return (
    <Container>
      <TextField fullWidth label="Email" onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth type="password" label="Password" onChange={e => setPassword(e.target.value)} />
      <Button onClick={submit} variant="contained">Login</Button>
    </Container>
  );
};

export default Login;
