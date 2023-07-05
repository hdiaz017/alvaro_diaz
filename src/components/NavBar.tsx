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
            padding: {
               xs: '0px 35px 0px 35px',
               sm: '0px 35px 0px 35px',
               md: '0px 75px 0px 75px',
            },
            position: 'sticky',
            top: 0,
         }}
      >
         <Toolbar>
            <Typography
               variant='h4'
               component='div'
               sx={{
                  flexGrow: 1,
                  fontSize: { xs: '20px', sm: ' 20px', md: '30px' },
               }}
            >
               <NavLink
                  to='/'
                  style={{ color: 'white', textDecoration: 'none' }}
               >
                  Alvaro Díaz
               </NavLink>
            </Typography>

            {/* <Stack direction='row' spacing={3} marginRight={3}> */}
            <Typography>
               <NavLink
                  to='gallery'
                  style={{ color: 'white', textDecoration: 'none' }}
               >
                  Gallery
               </NavLink>
            </Typography>
            {/* </Stack> */}
            <NavLink
               to='cart'
               style={{ color: 'white', textDecoration: 'none' }}
            >
               <IconButton edge='end' aria-label='logo'>
                  <Badge badgeContent={cart} color='error'>
                     <ShoppingCartIcon />
                  </Badge>
               </IconButton>
            </NavLink>
         </Toolbar>
      </AppBar>
   );
};
