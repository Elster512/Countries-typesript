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
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h5">
          Where in the world?
        </Typography>
        <IconButton onClick={handleClickTheme}>
          {theme ? <LightModeOutlined /> : <DarkModeOutlined />}
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            {theme ? "Light Mode" : "Dark Mode"}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
