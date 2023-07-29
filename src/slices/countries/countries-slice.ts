import { createSlice } from "@reduxjs/toolkit";
import { loadAllCountries } from "./countries-asyncActions";
import { Country } from "../../types/country";
type CountriesSlice = {
  list: Country[];
  status: string;
};
const initialState: CountriesSlice = {
  list: [],
  status: "",
};
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAllCountries.rejected, (state, action) => {
        if (action.error.message) {
          state.status = action.error.message;
        } else {
          state.status = "error";
        }
      })
      .addCase(loadAllCountries.fulfilled, (state, action) => {
        state.list = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
