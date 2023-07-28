import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    changeTheme: (state) => {
      state = true;
    },
  },
});

export const themeReducer = themeSlice.reducer;
