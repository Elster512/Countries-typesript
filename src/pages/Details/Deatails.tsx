import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBorderCountries,
  selectCountryByName,
} from "../../slices/countries/countries-selectors";
import { Country, Currency, Language } from "../../types/country";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import CountriesLink from "./CountriesLink";

function Deatails() {
  const navigate = useNavigate();
  const { name } = useParams();
  const country: Country | undefined = useSelector(
    selectCountryByName(name as string)
  );
  const borderCountries: Country[] | undefined = useSelector(
    selectBorderCountries(country?.borders as string[])
  );
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Container>
        <Grid2 container rowSpacing={5}>
          <Grid2 lg={12}>
            <Button
              sx={{
                boxShadow: 2,
                marginLeft: "4px",
                alignItems: "center",
                color: "text.primary",
                backgroundColor: "secondary.light",
              }}
              onClick={handleClick}
            >
              <ArrowBackOutlinedIcon
                sx={{
                  mr: 1,
                  transform: "scale(0.9)",
                }}
              />{" "}
              <Typography>Go Back</Typography>
            </Button>
          </Grid2>
          <Grid2 container lg={12} spacing={6} disableEqualOverflow>
            <Grid2 md={6} xs={12}>
              <Box
                boxShadow={4}
                component="img"
                src={country?.flags.svg}
                sx={{
                  maxHeight: { md: "378px", xs: "295px" },

                  maxWidth: { md: "450px", xs: "390px" },
                }}
              />
            </Grid2>
            <Grid2 container spacing={7} md={6} sx={{ maxHeight: "300px" }}>
              <Grid2 xs={12} sx={{ height: "25px" }}>
                <Typography variant="h5">{country?.name}</Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Grid2 container spacing={3}>
                  <Grid2 md={12} lg={6}>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Native Name:
                      </Typography>{" "}
                      {country?.nativeName}
                    </Typography>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Population:
                      </Typography>{" "}
                      {country?.population.toLocaleString("en-US")}
                    </Typography>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Region:
                      </Typography>{" "}
                      {country?.region}
                    </Typography>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Sub Region:
                      </Typography>{" "}
                      {country?.subregion}
                    </Typography>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Capital:
                      </Typography>{" "}
                      {country?.capital}
                    </Typography>
                  </Grid2>
                  <Grid2 md={12} lg={6}>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Top Level Domain:
                      </Typography>{" "}
                      {country?.topLevelDomain}
                    </Typography>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Currencies:
                      </Typography>{" "}
                      {country?.currencies.map((currency: Currency) => {
                        return currency.name;
                      })}
                    </Typography>
                    <Typography>
                      <Typography component="span" variant="body1">
                        Languages:
                      </Typography>{" "}
                      {country?.languages.map((language: Language, index) => {
                        if (index > 0) {
                          return `, ${language.name}`;
                        }
                        return language.name;
                      })}
                    </Typography>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Grid2 container spacing={2}>
                      <Grid2 xs={12} sm={12} md={12} lg={3}>
                        <Typography variant="h6">Border Countries:</Typography>
                      </Grid2>
                      <Grid2 xs={12} lg={9}>
                        <Grid2 container spacing={2}>
                          {borderCountries &&
                            borderCountries.map((country: Country, index) => {
                              return (
                                <Grid2 component="div" key={index}>
                                  <CountriesLink to={country.name}>
                                    <Button
                                      sx={{
                                        boxShadow: 2,

                                        color: "text.primary",
                                        backgroundColor: "secondary.light",
                                      }}
                                    >
                                      {country.name}
                                    </Button>
                                  </CountriesLink>
                                </Grid2>
                              );
                            })}
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Deatails;
