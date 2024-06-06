import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Outlet } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';


const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
            <Typography variant='h5' gutterBottom >Blog</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#065750',
    },
    secondary: {
      main: '#fdf2eb',
    },
    text: {
      primary: '#fdf2eb',
      secondary: '#065750'
    },
  },
  shape: {
    borderRadius: 15,
  },
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar />
      <Container
        id='outlet-container'
        style={{
          marginTop: '140px'
        }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
