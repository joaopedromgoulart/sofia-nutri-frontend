import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Outlet } from "react-router-dom";
import { CssBaseline } from '@mui/material';


const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="header">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src=".\src\assets\root\logo-sofia.svg" alt="logo"/>
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Sofia Foresti
          </Typography>
          <Button color="inherit">
            <Typography variant='h5'>Blog</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default function Root() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <Outlet />
    </React.Fragment>
  );
}
