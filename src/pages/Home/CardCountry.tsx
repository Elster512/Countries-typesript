import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Flags } from "../../types/country";
import { Region } from "../../types/Regions";
interface CardCountryProps {
  name: string;
  flags: Flags;
  population: number;
  region: Region;
  capital: string;
}
function CardCountry({
  flags,
  name,
  population,
  region,
  capital,
}: CardCountryProps) {
  return (
    <Grid xs={12} sm={12} md={12} lg={3}>
      <Card
        sx={{
          width: { lg: "300px", md: "350px", sm: "350px", xs: "350px" },
          height: { lg: "300px", md: "400px", sm: "400px", xs: "400px" },
          margin: "0 auto",
        }}
      >
        <CardMedia
          sx={{
            height: { lg: "135px", md: "200px", sm: "200px", xs: "200px" },
          }}
          image={flags.png}
        ></CardMedia>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography>
            <span>Population:</span> {population}
          </Typography>
          <Typography>
            <span>Region:</span> {region}
          </Typography>
          <Typography>
            <span>Capital:</span> {capital}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardCountry;