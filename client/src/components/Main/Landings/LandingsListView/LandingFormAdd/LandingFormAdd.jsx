import React, { useState } from "react";
import axios from 'axios';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import AddLocationIcon from "@mui/icons-material/AddLocation";
import {
  API_LANDING_URI,
  API_CREATE,
  LANDING_VALUE_ID,
  LANDING_VALUE_NAME,
  LANDING_VALUE_NAMETYPE,
  LANDING_VALUE_CLASS,
  LANDING_VALUE_MASS,
  LANDING_VALUE_FALL,
  LANDING_VALUE_YEAR,
  LANDING_VALUE_LAT,
  LANDING_VALUE_LONG
} from "../../../../../constants/constants";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "44%",
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));


const LandingFormAdd = () => {

  const [expanded, setExpanded] = useState(false);

  const [idValue, setIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [nametypeValue, setNametypeValue] = useState("");
  const [recclassValue, setRecclassValue] = useState("");
  const [massValue, setMassValue] = useState("");
  const [fallValue, setFallValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [reclatValue, setReclatValue] = useState("");
  const [reclongValue, setReclongValue] = useState("");


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSaveLanding = async () => {
    try {
      if (idValue !== ''
        && nameValue !== ''
        && nametypeValue !== ''
        && recclassValue !== ''
        && yearValue !== ''
        && massValue !== ''
        && fallValue !== ''
        && reclatValue !== ''
        && reclongValue !== '') {
          
        const newLanding = {
          id: idValue,
          name: nameValue,
          nametype: nametypeValue,
          recclass: recclassValue,
          year: yearValue,
          mass: massValue,
          fall: fallValue,
          reclat: reclatValue,
          reclong: reclongValue,
          geolocation: {
            latitude: reclatValue,
            longitude: reclongValue
          }
        };

        console.log(newLanding);
        const res = await axios.post(`${process.env.REACT_APP_HOST}${API_LANDING_URI}${API_CREATE}`, newLanding);
        const data = await res.data;
        handleExpandClick();
        console.log(data);
      }
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

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
        <AddLocationIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Add a new landing:</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <TextField label="ID" id={LANDING_VALUE_ID} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Name" id={LANDING_VALUE_NAME} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Nametype" id={LANDING_VALUE_NAMETYPE} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Class" id={LANDING_VALUE_CLASS} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Mass" id={LANDING_VALUE_MASS} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Fall" id={LANDING_VALUE_FALL} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Year" id={LANDING_VALUE_YEAR} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Latitude" id={LANDING_VALUE_LAT} size="small" margin="dense" onChange={handleValue} required />
            <TextField label="Longitude" id={LANDING_VALUE_LONG} size="small" margin="dense" onChange={handleValue} required />
            <IconButton color="primary" aria-label="save" size="large" onClick={handleSaveLanding}>
              <SaveIcon fontSize="large" />
            </IconButton>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};


export default LandingFormAdd;

