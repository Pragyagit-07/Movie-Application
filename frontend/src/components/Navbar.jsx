import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" sx={{ background: "#1c1c1c" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "#ff9800" }}
        >
           MovieVerse
        </Typography>

        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/search" color="inherit">
            Search
          </Button>

          {user?.role === "admin" && (
            <Button component={Link} to="/admin/add" color="inherit">
              Add Movie
            </Button>
          )}

          {user ? (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
