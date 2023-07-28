import React from "react";
import { Grid, Container } from "@mui/material";
import CardCountry from "./CardCountry";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux-hooks";
import { loadAllCountries } from "../../slices/countries/countries-asyncActions";
import { selectAllCountries } from "../../slices/countries/countries-selectors";
import { Country } from "../../types/country";

function Home() {
  const dispatch = useAppDispatch();
  const countries = useSelector(selectAllCountries);
  React.useEffect(() => {
    dispatch(loadAllCountries());
  }, [dispatch]);
  return (
    <Container sx={{ maxWidth: "1600px" }} maxWidth={false}>
      <Grid container columnSpacing={8} rowSpacing={8}>
        {countries.map((country: Country, index) => (
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
  );
}

export default Home;
