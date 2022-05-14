import React, { useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import {
  API_LANDING_URI,
  API_LANDING_EDIT,
  API_LANDING_DELETE,
  LANDING_VALUE_ID,
  LANDING_VALUE_NAME,
  LANDING_VALUE_NAMETYPE,
  LANDING_VALUE_CLASS,
  LANDING_VALUE_MASS,
  LANDING_VALUE_FALL,
  LANDING_VALUE_YEAR,
  LANDING_VALUE_LAT,
  LANDING_VALUE_LONG
} from "../../../../../../constants/constants";

const LandingCard = (props) => {

  const [open, setOpen] = useState(false);
  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [nametypeValue, setNametypeValue] = useState("");
  const [recclassValue, setRecclassValue] = useState("");
  const [massValue, setMassValue] = useState("");
  const [fallValue, setFallValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [reclatValue, setReclatValue] = useState("");
  const [reclongValue, setReclongValue] = useState("");

  const { id, name, nametype, recclass, year, mass, fall, reclat, reclong } = props.landing;

  const handleEdit = async () => {
    try {
      setOpen(false);
      const editLanding = {
        id: idValue || id,
        name: nameValue || name,
        nametype: nametypeValue || nametype,
        recclass: recclassValue || recclass,
        year: yearValue || year,
        mass: massValue || mass,
        fall: fallValue || fall,
        reclat: reclatValue || reclat,
        reclong: reclongValue || reclong,
        geolocation: {
          latitude: reclatValue || reclat,
          longitude: reclongValue || reclong
        }
      };

      const res = await axios.put(`${process.env.REACT_APP_HOST}${API_LANDING_URI}${API_LANDING_EDIT}`, editLanding);
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleValue = (e) => {
    switch (e.target.id) {
      case LANDING_VALUE_ID:
        setIdValue(e.target.value);
        break;
      case LANDING_VALUE_NAME:
        setNameValue(e.target.value);
        break;
      case LANDING_VALUE_NAMETYPE:
        setNametypeValue(e.target.value);
        break;
      case LANDING_VALUE_CLASS:
        setRecclassValue(e.target.value);
        break;
      case LANDING_VALUE_MASS:
        setMassValue(e.target.value);
        break;
      case LANDING_VALUE_FALL:
        setFallValue(e.target.value);
        break;
      case LANDING_VALUE_YEAR:
        setYearValue(e.target.value);
        break;
      case LANDING_VALUE_LAT:
        setReclatValue(e.target.value);
        break;
      case LANDING_VALUE_LONG:
        setReclongValue(e.target.value);
        break;
      default:
        break;
    }
  }



  const handleDelete = async () => {
    try {
      props.delete();
      const deleteID = { id: id };
      const res = await axios.delete(`${process.env.REACT_APP_HOST}${API_LANDING_URI}${API_LANDING_DELETE}`, { data: deleteID });
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Card sx={{ display: "flex", marginBlock: 3 }} >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Class: {recclass}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mass: {mass}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Year {year}
                </Typography>
              </CardContent>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="edit" {...bindTrigger(popupState)} onClick={() => setOpen(true)}>
                  <EditIcon fontSize="medium" />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="delete" onClick={handleDelete}>
                  <DeleteIcon fontSize="medium" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>

          <Popover
            {...bindPopover(popupState)}
            open={open}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 200, left: 400 }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <CardContent>
              <Typography paragraph>Edit the landing:</Typography>
              <Box sx={{ flexGrow: 1 }}>
                <TextField label="ID" id={LANDING_VALUE_ID} size="small" margin="dense" placeholder={id} onChange={handleValue} />
                <TextField label="Name" id={LANDING_VALUE_NAME} size="small" margin="dense" placeholder={name} onChange={handleValue} />
                <TextField label="Nametype" id={LANDING_VALUE_NAMETYPE} size="small" margin="dense" placeholder={nametype} onChange={handleValue} />
                <TextField label="Class" id={LANDING_VALUE_CLASS} size="small" margin="dense" placeholder={recclass} onChange={handleValue} />
                <TextField label="Mass" id={LANDING_VALUE_MASS} size="small" margin="dense" placeholder={mass} onChange={handleValue} />
                <TextField label="Fall" id={LANDING_VALUE_FALL} size="small" margin="dense" placeholder={fall} onChange={handleValue} />
                <TextField label="Year" id={LANDING_VALUE_YEAR} size="small" margin="dense" placeholder={year} onChange={handleValue} />
                <TextField label="Latitude" id={LANDING_VALUE_LAT} size="small" margin="dense" placeholder={reclat} onChange={handleValue} />
                <TextField label="Longitude" id={LANDING_VALUE_LONG} size="small" margin="dense" placeholder={reclong} onChange={handleValue} />
                <IconButton color="primary" aria-label="save" size="large" onClick={handleEdit}>
                  <SaveIcon fontSize="large" />
                </IconButton>
              </Box>
            </CardContent>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default LandingCard;