import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import React from "react";

function Header() {
  return (
    <AppBar position="static" sx={{ mb: "50px" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h5">
          Where in the world?
        </Typography>
        <IconButton>
          <DarkModeOutlined />
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Dark Mode
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
