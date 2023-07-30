import { RootState } from "../../store";
import { Country } from "../../types/country";
import { createSelector } from "@reduxjs/toolkit";
export const selectAllCountries = (state: RootState) => {
  return state.countries;
};

export const selectCountryByName = createSelector(
  [selectAllCountries, (selectAllCountries, countryName) => countryName],
  (countries, name) => {
    return countries.list.find((country: Country) => {
      return country.name === name;
    });
  }
);
export const selectBorderCountries = createSelector(
  [selectAllCountries, (selectAllCountries, borders) => borders],
  (countries, borders) => {
    if (!borders) {
      return [];
    }
    return countries.list.filter((country: Country) => {
      return borders.includes(country.alpha3Code);
    });
  }
);
