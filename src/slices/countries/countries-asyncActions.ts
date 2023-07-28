import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import { Extra } from "../../types/extra";

export const loadAllCountries = createAsyncThunk<
  { data: Country[] },
  undefined,
  { extra: Extra }
>("countries/loadAll", (_, { extra: { client } }) => {
  return client.get("http://localhost:3001/countries");
});
