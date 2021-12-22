import { Link, NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <NavigationStyled>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link to='/appointment' style={{  textDecoration: 'none' }}>
            <Button color="inherit" style={{ color: 'white'}}>Appointment</Button>
          </Link>
            {
              user?.email ?
                <Box>
                  <NavLink to='/dashboard' style={{  textDecoration: 'none' }}>
                    <Button color="inherit" style={{ color: 'white'}}>Dashboard</Button>
                  </NavLink>
                
                  <NavLink to='/login' onClick={logOut} style={{  textDecoration: 'none' }}>
                    <Button color="inherit" style={{ color: 'white'}}>Log Out</Button>
                  </NavLink>
                </Box>
              :
                <NavLink to='/login' style={{  textDecoration: 'none' }}>
                <Button color="inherit" style={{ color: 'white'}}>Login</Button>
              </NavLink>
            }
        </Toolbar>
      </AppBar>
    </Box>
        </NavigationStyled>
    );
};

const NavigationStyled = styled.div``;

export default Navigation;