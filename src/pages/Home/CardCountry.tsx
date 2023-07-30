import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Flags } from "../../types/country";
import { Region } from "../../types/Regions";
import CustomLink from "./CustomLink";

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
    <Grid2 xs={12} lg={3}>
      <CustomLink to={name}>
        <Card
          sx={{
            width: { sm: "300px", xs: "300px" },
            height: { lg: "300px", md: "400px", sm: "400px", xs: "400px" },
            margin: "0 auto",
            boxShadow: 3,
          }}
        >
          <CardMedia
            sx={{
              height: { lg: "135px", md: "200px", sm: "200px", xs: "200px" },
              width: "100%",
            }}
            image={flags.png}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography>
              <span>Population:</span> {population.toLocaleString("en-US")}
            </Typography>
            <Typography>
              <span>Region:</span> {region}
            </Typography>
            <Typography>
              <span>Capital:</span> {capital}
            </Typography>
          </CardContent>
        </Card>
      </CustomLink>
    </Grid2>
  );
}

export default CardCountry;
