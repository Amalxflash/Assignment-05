import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Dashboard
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              marginRight: 2,
              ':hover': {
                color: 'blue', // Hover color
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/employee-form"
            sx={{
              ':hover': {
                color: 'blue', // Hover color
              },
            }}
          >
            Employee Form
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;