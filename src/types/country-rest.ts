import { Region } from "./Regions";
import { Currency, Flags } from "./country";
type LanguageRest = {
  [key: string]: string;
};
export type CountryRest = {
  name: {
    common: string;
  };
  nativeName: {
    est: {
      official: string;
    };
  };
  tld: string[];
  flags: Flags;
  popualtion: number;
  currencies: Currency;
  region: Region;
  subregion: string;
  languages: LanguageRest;
  borders: string[];
};
