import React from "react";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const LandingsFormMap = () => {

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Minimum mass"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '20ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">g</InputAdornment>,
            }}
          />
        </div>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Class"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '20ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">class</InputAdornment>,
            }}
          />
        </div>
      </Box>
    </>
  );
}

export default LandingsFormMap;