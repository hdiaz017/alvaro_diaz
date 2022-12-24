import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Drawings } from '../store/slices/drawings/drawingsSlice';
import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

export const ImagePage = () => {
   const navigate = useNavigate();
   const items = useSelector((state: RootState) => state.drawings.drawings);

   const { id } = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   useEffect(() => {
      if (items.length === 0) navigate('/');
   }, []);
   const item: Drawings | undefined = items.find((i) => {
      if (id) {
         return i.id == parseInt(id);
      }
   });

   const priceFormat = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
   });
   const currency = item?.price && priceFormat.format(item.price);
   return (
      <>
         <div
            style={{
               height: '100vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               margin: '0px 300px 0px 100px',
            }}
         >
            <img
               src={item?.url}
               alt={item?.name}
               style={{ height: '700px', borderRadius: '20px' }}
            />
            <Box ml={5}>
               <Typography variant='h6' mt={4}>
                  <li>
                     <strong>Título: </strong> {item?.name}
                  </li>
               </Typography>
               <Typography variant='h6' mt={4}>
                  <li>
                     <strong>Precio: </strong> {currency} MXN
                  </li>
               </Typography>
               <Typography variant='h6' mt={4}>
                  <li>
                     <strong>Tamaño: </strong> 45x30cm
                  </li>
               </Typography>
               <Button
                  style={{
                     backgroundColor: '#2262cc',
                     color: 'white',
                     marginTop: '30px',
                  }}
                  variant='contained'
               >
                  Agregar al Carrito
               </Button>
            </Box>
         </div>
      </>
   );
};
