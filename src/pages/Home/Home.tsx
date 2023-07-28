import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CardCountry from "./CardCountry";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux-hooks";
import { loadAllCountries } from "../../slices/countries/countries-asyncActions";
import { selectAllCountries } from "../../slices/countries/countries-selectors";
import { Country } from "../../types/country";

import SearchField from "./SearchField";
import SelectMenu from "./SelectMenu";
import { Region } from "../../types/Regions";

function Home() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region>("");
  const countries = useSelector(selectAllCountries);
  const handleChangeSelect = (text: Region) => {
    setRegion(text);
  };
  const handleChangeInput = (text: string) => {
    setSearch(text);
  };
  useEffect(() => {
    dispatch(loadAllCountries());
  }, [dispatch]);
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1600px",
          mt: "3rem",
          padding: "20px",
        }}
      >
        <Grid
          container
          rowSpacing={4}
          sx={{
            maxWidth: "1510px",
            margin: "0 auto",
            mb: "3rem",
          }}
        >
          <SearchField handleChange={handleChangeInput} value={search} />
          <Grid lg={2} md={2} sm={2} xs={2}>
            <SelectMenu handleChange={handleChangeSelect} value={region} />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          {countries
            .filter((country: Country) => {
              if (region) {
                return country.region === region;
              } else {
                return true;
              }
            })
            .filter((country: Country) =>
              country.name.toLowerCase().includes(search)
            )
            .map((country: Country, index) => (
              <CardCountry
                flags={country.flags}
                capital={country.capital}
                region={country.region}
                population={country.population}
                name={country.name}
                key={index}
              />
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
