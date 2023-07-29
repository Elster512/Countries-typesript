import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
type ThemeSlice = { mode: PaletteMode };
const initialState: ThemeSlice = {
  mode: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
