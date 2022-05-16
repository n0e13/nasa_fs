import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Collapse from "@mui/material/Collapse";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import {
  API_NEA_URI,
  API_CREATE,
  NEA_DESIGNATION,
  NEA_DATE,
  NEA_MAG,
  NEA_MOID,
  NEA_1,
  NEA_2,
  NEA_PERIOD,
  NEA_DEG,
  NEA_PHA,
  NEA_ORBIT
} from '../../../../../constants/constants';


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


const NeasFormAdd = () => {

  const [expanded, setExpanded] = useState(false);

  const { register, handleSubmit, resetField } = useForm();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const createNea = async (newNea) => {
    try {
      const oNewNea = {
        [NEA_DESIGNATION]: newNea.designation,
        [NEA_DATE]: newNea.discovery_date,
        [NEA_MAG]: newNea.h_mag,
        [NEA_MOID]: newNea.moid_au,
        [NEA_1]: newNea.q_au_1,
        [NEA_2]: newNea.q_au_2,
        [NEA_PERIOD]: newNea.period_yr,
        [NEA_DEG]: newNea.i_deg,
        [NEA_PHA]: newNea.pha,
        [NEA_ORBIT]: newNea.orbit_class
      };
      const res = await axios.post(`${process.env.REACT_APP_HOST}${API_NEA_URI}${API_CREATE}`, oNewNea);
      const data = await res.data;
      console.log(data);
      resetField(`${NEA_DESIGNATION}`);
      resetField(`${NEA_DATE}`);
      resetField(`${NEA_MAG}`);
      resetField(`${NEA_MOID}`);
      resetField(`${NEA_1}`);
      resetField(`${NEA_2}`);
      resetField(`${NEA_PERIOD}`);
      resetField(`${NEA_DEG}`);
      resetField(`${NEA_PHA}`);
      resetField(`${NEA_ORBIT}`);
      handleExpandClick();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: '100%' }}>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <AddCircleOutlineIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Add a new NEA:</Typography>
            <Box sx={{ flexGrow: 1 }}>
              <form onSubmit={handleSubmit(createNea)}>
                <TextField {...register(`${NEA_DESIGNATION}`)} label="Desgination" size="small" margin="dense" name={NEA_DESIGNATION} required />
                <TextField {...register(`${NEA_DATE}`)} type="date" size="small" margin="dense" name={NEA_DATE} required />
                <TextField {...register(`${NEA_MAG}`)} label="H_mag" size="small" margin="dense" name={NEA_MAG} required />
                <TextField {...register(`${NEA_MOID}`)} label="Moid_au" size="small" margin="dense" name={NEA_MOID} required />
                <TextField {...register(`${NEA_1}`)} label="Q_au_1" size="small" margin="dense" name={NEA_1} required />
                <TextField {...register(`${NEA_2}`)} label="Q_au_2" size="small" margin="dense" name={NEA_2} required />
                <TextField {...register(`${NEA_PERIOD}`)} label="Period_yr" size="small" margin="dense" name={NEA_PERIOD} required />
                <TextField {...register(`${NEA_DEG}`)} label="I_deg" size="small" margin="dense" name={NEA_DEG} required />
                <TextField {...register(`${NEA_PHA}`)} label="Pha" size="small" margin="dense" name={NEA_PHA} required />
                <TextField {...register(`${NEA_ORBIT}`)} label="Orbit class" size="small" margin="dense" name={NEA_ORBIT} required />
                <IconButton color="primary" aria-label="save" type="submit" size="large">
                  <SaveIcon fontSize="large" />
                </IconButton>
              </form>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default NeasFormAdd;
