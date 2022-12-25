import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const NavBar = () => {
   const cart = useSelector((state: RootState) => state.cart.quantity);
   return (
      <AppBar
         sx={{
            margin: 0,
            padding: '0px 75px 0px 75px',
            position: 'sticky',
            top: 0,
         }}
      >
         <Toolbar>
            <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
               <NavLink
                  to='/'
                  style={{ color: 'white', textDecoration: 'none' }}
               >
                  Alvaro Díaz
               </NavLink>
            </Typography>

            <Stack direction='row' spacing={3} marginRight={3}>
               <Typography>
                  <NavLink
                     to='gallery'
                     style={{ color: 'white', textDecoration: 'none' }}
                  >
                     Gallery
                  </NavLink>
               </Typography>
            </Stack>
            <IconButton edge='end' aria-label='logo'>
               <Badge badgeContent={cart} color='error'>
                  <ShoppingCartIcon />
               </Badge>
            </IconButton>
         </Toolbar>
      </AppBar>
   );
};
