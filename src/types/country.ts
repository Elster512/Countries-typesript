import { Region } from "./Regions";
export type Flags = {
  svg: string;
  png: string;
};
type Currency = {
  code: string;
  name: string;
  symbol: string;
};
type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
export type Country = {
  name: string;
  topLevelDomain: string[];

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
