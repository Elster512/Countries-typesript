import { RootState } from "../../store";

export const selectAllCountries = (state: RootState) => {
  return state.countries;
};
