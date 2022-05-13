import React, { useState } from "react";
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSaveLanding = () => {
    console.log('save landing click');
  }

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <AddLocationIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Add a new landing:</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <TextField label="ID" id="landing_id" size="small" margin="dense" />
            <TextField label="Name" id="landing_name" size="small" margin="dense" />
            <TextField label="Nametype" id="landing_nametype" size="small" margin="dense" />
            <TextField label="Class" id="landing_class" size="small" margin="dense" />
            <TextField label="Mass" id="landing_mass" size="small" margin="dense" />
            <TextField label="Fall" id="landing_fall" size="small" margin="dense" />
            <TextField label="Year" id="landing_year" size="small" margin="dense" />
            <TextField label="Latitude" id="landing_lat" size="small" margin="dense" />
            <TextField label="Longitude" id="landing_lon" size="small" margin="dense" />
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

