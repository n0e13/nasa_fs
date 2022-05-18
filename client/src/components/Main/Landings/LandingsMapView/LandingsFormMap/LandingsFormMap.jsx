import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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

  const { saveTypeFilter, saveQuantityFilter, saveFromYear, saveToYear, saveTypeClass, allClasses } = props.data;
  const [filter, setFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'select-class') {
      saveTypeClass(event.target.value)
    } else {
      setFilter(event.target.value);
      setNameFilter(nameFilters[event.target.value]);
      saveTypeFilter(event.target.value);
    }
  };

  const handleChangeQuantity = (event) => {
    if (filter === LANDING_MIN_MASS
      || filter === LANDING_MASS) {
      saveQuantityFilter(event.target.value);
    } else if (filter === LANDING_BETWEEN_YEARS) {
      if (event.target.id === 'from-year') {
        saveFromYear(event.target.value);
      } else {
        saveToYear(event.target.value);
      }
    } else if (filter === LANDING_FROM_YEAR) {
      saveFromYear(event.target.value);
    } else if (filter === LANDING_TO_YEAR) {
      saveToYear(event.target.value);
    }
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: '95%' }} size="small">
        <InputLabel id="input-select-small">Filter</InputLabel>
        <Select
          labelId="demo-select-small"
          name="select-filter"
          label="Filter"
          defaultValue=''
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
            <FormControl sx={{ m: 1, width: '95%' }} size="small">
              <InputLabel id="input-select-class">Classes</InputLabel>
              <Select
                labelId="demo-select-class"
                name="select-class"
                label="Class"
                defaultValue=''
                onChange={handleChange}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                {allClasses.map(landingClass => {
                  return (
                    <MenuItem id='landing-class' key={uuidv4()} value={landingClass}>{landingClass}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            /*             <Box sx={{ width: '95%' }}>
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
                        </Box> */
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