import {
   AppBar,
   IconButton,
   InputAdornment,
   TextField,
   Toolbar,
   Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = () => {
   return (
      <AppBar sx={{ margin: 0, padding: 0, position: 'sticky', top: 0 }}>
         <Toolbar>
            <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
               <NavLink
                  to='/'
                  style={{ color: 'white', textDecoration: 'none' }}
               >
                  Alvaro Díaz
               </NavLink>
            </Typography>
            <TextField
               size='small'
               id='outlined-basic'
               placeholder='Search...'
               //    label='Search'
               InputProps={{
                  startAdornment: (
                     <InputAdornment position='start'>
                        <SearchIcon />
                     </InputAdornment>
                  ),
               }}
               variant='outlined'
               sx={{ paddingRight: '2rem' }}
            />
            <Stack direction='row' spacing={3} marginRight={3}>
               <Typography>
                  <NavLink
                     to='gallery'
                     style={{ color: 'white', textDecoration: 'none' }}
                  >
                     Gallery
                  </NavLink>
               </Typography>
               <Typography>
                  <NavLink
                     to='shop'
                     style={{ color: 'white', textDecoration: 'none' }}
                  >
                     Shop
                  </NavLink>
               </Typography>
               <Typography>
                  <NavLink
                     to='about'
                     style={{ color: 'white', textDecoration: 'none' }}
                  >
                     About
                  </NavLink>
               </Typography>
            </Stack>
            <IconButton edge='end' aria-label='logo'>
               <ShoppingCartIcon />
            </IconButton>
         </Toolbar>
      </AppBar>
   );
};
