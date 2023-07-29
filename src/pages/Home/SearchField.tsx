import { TextField, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SearchIcon from "@mui/icons-material/Search";
interface SearchFieldProps {
  handleChange: (text: string) => void;
  value: string;
}
function SearchField({ handleChange, value }: SearchFieldProps) {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value.trim());
  };
  return (
    <Grid lg={10} md={12} sm={12} xs={12}>
      <TextField
        value={value}
        onChange={handleChangeInput}
        name="textFild"
        placeholder="Search for a country..."
        sx={{
          width: { lg: "350px", md: "100%", sm: "100%", xs: "100%" },
          boxShadow: 3,
          borderRadius: "4px",
          color: "text.primary",
          backgroundColor: "secondary.light",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}

export default SearchField;
