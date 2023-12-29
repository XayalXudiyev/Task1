import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { favoriteContext } from "../store/favoriteContext.jsx";


export default function IndicatorSelect() {



  const { indicatorOptions } = React.useContext(favoriteContext);

  const [age, setAge] = React.useState("");
  const [indicator, setIndicator] = React.useState([]);

  React.useEffect(() => {
    if (indicatorOptions) {
      fetch(`https://searchartback-production-dc78.up.railway.app/api/indicators/?subsector=${indicatorOptions}`)
        .then((response) => response.json())
        .then((responseData) => setIndicator(responseData));
    }else{
      setIndicator([]);
      setAge("")
    }
  }, [indicatorOptions]);

  const handleChange = (event) => {
    setAge(event.target.value);
  }







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
          Indicator
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
          {indicator.map((indicatorItem,i) => <MenuItem  key={i} value={indicatorItem}>{indicatorItem}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );

}