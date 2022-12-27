import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { CartTable } from '../components/CartTable';
import { RootState } from '../store/store';

export const CartPage = () => {
   const { cart, quantity } = useSelector((state: RootState) => state.cart);

   return quantity <= 0 ? (
      <>
         <Box style={{ height: '100vh' }}>
            <Typography margin={10} variant='h6'>
               No se encontraron articulos seleccionados en el carrito.
               <br /> Selecciona un artículo de la galería.
            </Typography>
         </Box>
      </>
   ) : (
      <>
         <Box style={{ height: '100vh' }}>
            <CartTable />
         </Box>
      </>
   );
};
