import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LandingsMenuViews = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item><Link href='/landings'>Mapa</Link></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Link href='/landings/list'>Lista</Link></Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingsMenuViews;
