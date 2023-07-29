import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { darkTheme, lightTheme } from "../slices/theme/themes";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/theme/theme-selectors";
import { CssBaseline } from "@mui/material";
interface ThemeHelperProps {
  children: React.ReactNode;
}
function ThemeHelper({ children }: ThemeHelperProps) {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeHelper;
