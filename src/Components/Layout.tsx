import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box sx={{ backgroundColor: "Background.default", color: "text.primary" }}>
      <Header />
      <Outlet />
    </Box>
  );
}

export default Layout;
