import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import {favoriteContext} from "../store/favoriteContext.jsx";
export default function SectorSelect() {
  const {setSubSectorOptions,setIndicatorOptions} = React.useContext(favoriteContext);
  const [age, setAge] = React.useState("");
  const [sector, setSector] = React.useState([]);

  React.useEffect(() => {
    fetch("https://searchartback-production-dc78.up.railway.app/api/sectors/")
      .then((response) => response.json())
      .then((repsonseData) => setSector(repsonseData));
  }, []);
  const handleChange = (event) => {
    setAge(event.target.value);
    setSubSectorOptions(event.target.value);
    setIndicatorOptions("");
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Typography
          variant="h2"
          sx={{
            color: "#A7B4CA",
            fontFamily: "Manrope",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          Sector
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            width: "202px",
            height: "38px",
            border: "1px solid #4A628A",
            backgroundColor: "#293F64",
            borderRadius: "7px",
          }}
        >
          {sector.map((item , i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
