import React, { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const NeasCard = (props) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class } = props.nea;

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <>
      <Button sx={{ flexDirection: 'column' }} variant="outlined" startIcon={<InfoIcon />} size='large' onClick={handleClick}>
        <p>Designation: {designation}</p>
        <p>Date: {discovery_date}</p>
        <p>Orbit: {orbit_class}</p>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h3">
              {designation}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Date:</b> {discovery_date}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>H_Mag:</b> {h_mag}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Moid_Au:</b> {moid_au}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Q_Au_1:</b> {q_au_1}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Q_Au_2:</b> {q_au_2}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Period year:</b> {period_yr}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>I_Deg:</b> {i_deg}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Pha:</b> {pha}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <b>Orbit:</b> {orbit_class}
            </Typography>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NeasCard;




