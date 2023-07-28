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
        value={value}
        labelId="demo-simple-select-label"
        displayEmpty
        id="demo-simple-select"
        onChange={handleChangeSelect}
      >
        <MenuItem value="">
          <em>Filter by Region</em>
        </MenuItem>
        <MenuItem value={"Africa"}>Africa</MenuItem>
        <MenuItem value={"America"}>America</MenuItem>
        <MenuItem value={"Asia"}>Asia</MenuItem>
        <MenuItem value={"Oceania"}>Oceania</MenuItem>
        <MenuItem value={"Europe"}>Europe</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SelectMenu;
