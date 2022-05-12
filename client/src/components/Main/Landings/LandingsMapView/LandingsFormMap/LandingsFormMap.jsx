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

const nameFilters = ['', 'Minimum mass', 'Mass', 'Class', 'From year', 'To year'];

const LandingsFormMap = (props) => {

  const [filter, setFilter] = useState(0);
  const [nameFilter, setNameFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    setNameFilter(nameFilters[event.target.value]);
    props.data.saveTypeFilter(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    if (filter === LANDING_MIN_MASS
      || filter === LANDING_MASS
      || filter === LANDING_CLASS) {
      props.data.saveQuantityFilter(event.target.value);
    } else if (filter === LANDING_BETWEEN_YEARS) {
      if (event.target.id === 'from-year') {
        props.data.saveFromYear(event.target.value);
      } else {
        props.data.saveToYear(event.target.value);
      }
    } else if (filter === LANDING_FROM_YEAR) {
      props.data.saveFromYear(event.target.value);
    } else if (filter === LANDING_TO_YEAR) {
      props.data.saveToYear(event.target.value);
    }
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: '95%' }} size="small">
        <InputLabel id="demo-select-small">Filter</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={LANDING_MIN_MASS}>Minimum mass</MenuItem>
          <MenuItem value={LANDING_MASS}>Mass</MenuItem>
          <MenuItem value={LANDING_CLASS}>Class</MenuItem>
          <MenuItem value={LANDING_BETWEEN_YEARS}>Between years</MenuItem>
          <MenuItem value={LANDING_FROM_YEAR}>From year</MenuItem>
          <MenuItem value={LANDING_TO_YEAR}>To year</MenuItem>
        </Select>
      </FormControl>

      {filter === LANDING_BETWEEN_YEARS
        ?
        <Box sx={{ width: '95%' }}>
          <div>
            <TextField
              size='small'
              label="From year"
              onChange={handleChangeQuantity}
              id="from-year"
              sx={{ m: 1, maxWidth: '50%' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">year</InputAdornment>,
              }}
            />
            <TextField
              size='small'
              label="To year"
              onChange={handleChangeQuantity}
              id="to-year"
              sx={{ m: 1, maxWidth: '50%' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">year</InputAdornment>,
              }}
            />
          </div>
        </Box>
        : filter === LANDING_MIN_MASS || filter === LANDING_MASS
          ?
          <Box sx={{ width: '95%' }}>
            <>
              <TextField
                size='small'
                label={nameFilter}
                onChange={handleChangeQuantity}
                id="quantity"
                sx={{ m: 1, width: 350, maxWidth: '100%' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">g</InputAdornment>,
                }}
              />
            </>
          </Box>
          : filter === LANDING_CLASS
            ?
            <Box sx={{ width: '95%' }}>
              <>
                <TextField
                  size='small'
                  label={nameFilter}
                  onChange={handleChangeQuantity}
                  id="quantity"
                  sx={{ m: 1, width: 350, maxWidth: '100%' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">class</InputAdornment>,
                  }}
                />
              </>
            </Box>
            : filter === LANDING_FROM_YEAR || filter === LANDING_TO_YEAR
              ?
              <Box sx={{ width: '95%' }}>
                <>
                  <TextField
                    size='small'
                    label={nameFilter}
                    onChange={handleChangeQuantity}
                    id="year"
                    sx={{ m: 1, width: 350, maxWidth: '100%' }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">year</InputAdornment>,
                    }}
                  />
                </>
              </Box>
              : ''
      }
    </>
  );
}

export default LandingsFormMap;