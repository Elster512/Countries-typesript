import { Region } from "./Regions";
export type Flags = {
  svg: string;
  png: string;
};
export type Currency = {
  code: string;
  name: string;
  symbol: string;
};
export type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha3Code: string;
  capital: string;
  subregion: string;
  region: Region;
  population: number;
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies: Currency[];
  languages: Language[];
};
