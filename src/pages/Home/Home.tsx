import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import CardCountry from "./CardCountry";
import { useSelector } from "react-redux";

import { selectAllCountries } from "../../slices/countries/countries-selectors";
import { Country } from "../../types/country";

import SearchField from "./SearchField";
import SelectMenu from "./SelectMenu";
import { Region } from "../../types/Regions";

function Home() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region>("");
  const countries = useSelector(selectAllCountries);
  const handleChangeSelect = (text: Region) => {
    setRegion(text);
  };
  const handleChangeInput = (text: string) => {
    setSearch(text);
  };
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1600px",
          padding: "20px",
        }}
      >
        <Grid2
          container
          rowSpacing={4}
          sx={{
            maxWidth: "1510px",
            margin: "0 auto",
            mb: "3rem",
          }}
        >
          <Grid2 xs={12} lg={10}>
            <SearchField handleChange={handleChangeInput} value={search} />
          </Grid2>
          <Grid2 lg={2}>
            <SelectMenu handleChange={handleChangeSelect} value={region} />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={8}>
          {countries.status && (
            <Grid2 lg={12}>
              <Typography
                variant="h3"
                sx={{ margin: "0 auto", textAlign: "center" }}
              >
                {countries.status}
              </Typography>
            </Grid2>
          )}
          {countries.list &&
            countries.list
              .filter((country: Country) => {
                if (region) {
                  return country.region === region;
                } else {
                  return true;
                }
              })
              .filter((country: Country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
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
        </Grid2>
      </Container>
    </Box>
  );
}

export default Home;
