import React from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const Footer = () => {

  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><SendIcon fontSize='small' /> Wanna contact me?</Box>
              <Box>
                <Link href="mailto:noemy.garcia@gmail.com" color="inherit">
                  Write me!
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><GitHubIcon fontSize='small' /> See my code?</Box>
              <Box>
                <Link href="https://github.com/n0e13/nasa_fs" color="inherit">
                  Code
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><ArticleIcon fontSize='small' /> Documentation?</Box>
              <Box>
                <Link href="https://nasa-api-n0e.herokuapp.com/api-docs/" color="inherit">
                  API
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <pre>Hecho con mucho 💜  por n0e - mayo 2022</pre>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
