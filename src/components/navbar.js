import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import AdbIcon from '@mui/icons-material/Adb';



const NavBar = function () {

    return (
       <>
        <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static" sx={{ bgcolor: "6da37c" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="adb"
              sx={{ mr: 2 }}
            >
              <AdbIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:500 }}>
              CRUD APPLICATION
            </Typography>
            <Button color="inherit" component={Link} to="/home" sx={{':hover': {color: 'white'},}}>User List</Button>
            <Button color="inherit" component={Link} to="/new" sx={{':hover': {color: 'white'},}}>Add User</Button>
            <Button color="inherit" component={Link} to="/" sx={{':hover': {color: 'white'},}}>Logout</Button>

          </Toolbar>

        </AppBar>
      </Box>
      
       
       </>
    );
    }

    export default NavBar;