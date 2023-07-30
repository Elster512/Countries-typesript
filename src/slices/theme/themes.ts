import { createTheme } from "@mui/material";

const typography = {
  fontFamily: "Nunito Sans",
  h5: {
    fontWeight: 800,
  },
  h6: {
    fontWeight: 600,
  },
  body1: {
    fontWeight: 300,
  },
};
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    action: {
      active: "#000000",
    },
    primary: {
      main: "#ffffff",
      light: "#000000",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
      light: "#ffffff",
    },
    background: {
      default: "#FAFAFA",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: typography,
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    action: {
      active: "#ffffff",
    },
    primary: {
      main: "#ffffff",
      dark: "#2B3945",
    },
    secondary: {
      main: "#ffffff",
      light: "#2B3945",
      contrastText: "#ffffff",
    },
    background: {
      default: "#202C37",
      paper: "#202C37",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: typography,
});
