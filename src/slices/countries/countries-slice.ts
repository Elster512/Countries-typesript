import { createSlice } from "@reduxjs/toolkit";
import { loadAllCountries } from "./countries-asyncActions";
import { Country } from "../../types/country";
const initialState: Country[] = [];
const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllCountries.fulfilled, (state, action) => {
      return action.payload.data;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;
