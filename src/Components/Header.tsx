import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux-hooks";
import { changeTheme } from "../slices/theme/theme-slice";
import { selectTheme } from "../slices/theme/theme-selectors";

function Header() {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);
  const handleClickTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <AppBar position="static" sx={{ mb: "2rem", boxShadow: 2 }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h5">
          Where in the world?
        </Typography>
        <IconButton onClick={handleClickTheme}>
          {theme === "light" ? <LightModeOutlined /> : <DarkModeOutlined />}
          <Typography variant="h6" sx={{ ml: 1 }}>
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
