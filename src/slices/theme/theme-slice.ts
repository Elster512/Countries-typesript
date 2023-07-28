import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    changeTheme: (state) => {
      return !state;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
