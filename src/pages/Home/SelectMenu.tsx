import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import { FormControl, Select, SelectChangeEvent } from "@mui/material";
import { Region } from "../../types/Regions";
interface SelectMenuProps {
  handleChange: (text: Region) => void;
  value: Region;
}
const SelectMenu = ({ handleChange, value }: SelectMenuProps) => {
  const handleChangeSelect = (event: SelectChangeEvent) => {
    if (event.target.value === "") {
      handleChange("");
    } else {
      handleChange(event.target.value as Region);
    }
  };
  return (
    <FormControl sx={{ minWidth: "250px" }}>
      <Select
        sx={{ boxShadow: 3 }}
        value={value}
        displayEmpty
        onChange={handleChangeSelect}
      >
        <MenuItem value="">Filter by Region</MenuItem>
        <MenuItem value={"Africa"}>Africa</MenuItem>
        <MenuItem value={"Americas"}>Americas</MenuItem>
        <MenuItem value={"Asia"}>Asia</MenuItem>
        <MenuItem value={"Oceania"}>Oceania</MenuItem>
        <MenuItem value={"Europe"}>Europe</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SelectMenu;
