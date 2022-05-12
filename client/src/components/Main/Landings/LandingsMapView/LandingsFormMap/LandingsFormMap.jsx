import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  LANDING_MIN_MASS,
  LANDING_MASS,
  LANDING_CLASS,
  LANDING_BETWEEN_YEARS,
  LANDING_FROM_YEAR,
  LANDING_TO_YEAR
} from '../../../../../constants/constants';

const LandingsFormMap = (props) => {

  //const [age, setAge] = useState('');

  const handleChange = (event) => {
    //TODO: dependiendo de la opción, mostrar 1 o 2 input para meter datos
    console.log(event.target.value);
   // setAge(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: '95%' }} size="small">
        <InputLabel id="demo-select-small">Filter</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          /* value={age} */
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={LANDING_MIN_MASS}>Minimim mass</MenuItem>
          <MenuItem value={LANDING_MASS}>Mass</MenuItem>
          <MenuItem value={LANDING_CLASS}>Class</MenuItem>
          <MenuItem value={LANDING_BETWEEN_YEARS}>Between years</MenuItem>
          <MenuItem value={LANDING_FROM_YEAR}>From year</MenuItem>
          <MenuItem value={LANDING_TO_YEAR}>To year</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            size='small'
            label="Minimum mass"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '45%' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">g</InputAdornment>,
            }}
          />
          <TextField
            size='small'
            label="Minimum mass"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '45%' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">g</InputAdornment>,
            }}
          />
        </div>
      </Box>
    </>
  );
}

export default LandingsFormMap;