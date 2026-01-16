import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9800", // amber
    },
    secondary: {
      main: "#e91e63", // pink
    },
    background: {
      default: "#0f0f0f",
      paper: "#1c1c1c",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
