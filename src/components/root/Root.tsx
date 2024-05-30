import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <React.Fragment>
      <Box id='header'>
        <div className='header-title'>
          <img className='logo-img' src=".\src\assets\root\logo-sofia.svg" alt="logo"/>
            <Typography variant="h4" className='nutriname'>Sofia Foresti</Typography>
        </div>
      </Box>
      <div id="detail">
        <Outlet />
      </div>
    </React.Fragment>
  )
}
export default Root;