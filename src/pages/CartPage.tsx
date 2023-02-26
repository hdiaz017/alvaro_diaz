import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { RootState } from '../store/store';
import { CartTable } from '../components/CartTable';

export const CartPage = () => {
   const { quantity } = useSelector((state: RootState) => state.cart);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

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
      <Box style={{ height: '100vh' }} mt={10} ml={30}>
         <CartTable />
      </Box>
   );
};
