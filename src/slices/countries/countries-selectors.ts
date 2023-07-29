import { RootState } from "../../store";
import { Country } from "../../types/country";

export const selectAllCountries = (state: RootState) => {
  return state.countries;
};
export const selectCountryByName = (name: string) => {
  return (state: RootState) => {
    return state.countries.list.find((country: Country) => {
      return country.name === name;
    });
  };
};
export const selectBorderCountries = (borders: string[]) => {
  return (state: RootState) => {
    if (!borders) {
      return [];
    }
    return state.countries.list.filter((country: Country) => {
      return borders.includes(country.alpha3Code);
    });
  };
};
