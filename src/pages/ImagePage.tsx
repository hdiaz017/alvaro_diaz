import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { Drawings } from '../store/slices/drawings/drawingsSlice';
import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { addToCart, removeFromCart } from '../store/slices/cart/cartSlice';

export const ImagePage = () => {
   const dispatch = useDispatch<AppDispatch>();
   const navigate = useNavigate();
   const items = useSelector((state: RootState) => state.drawings.drawings);
   const cartItems = useSelector((state: RootState) => state.cart.cart);

   const { id } = useParams();

   const cartItem: Drawings | undefined = cartItems.find((item) => {
      if (id) {
         return item.id == parseInt(id);
      }
   });

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

   const addToCartFunc = (item: Drawings | undefined) => {
      if (item) {
         dispatch(addToCart(item));
      }
   };
   const removeFromCartFunc = (item: Drawings | undefined) => {
      if (item) {
         dispatch(removeFromCart(item));
      }
   };
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
                     <strong>Tamaño: </strong> {item?.size}
                  </li>
               </Typography>
               {!cartItem ? (
                  <Button
                     style={{
                        backgroundColor: '#2262cc',
                        color: 'white',
                        marginTop: '30px',
                     }}
                     variant='contained'
                     onClick={() => addToCartFunc(item)}
                  >
                     Agregar al Carrito
                  </Button>
               ) : (
                  <Button
                     style={{
                        backgroundColor: '#2262cc',
                        color: 'white',
                        marginTop: '30px',
                     }}
                     variant='contained'
                     onClick={() => removeFromCartFunc(item)}
                  >
                     Remover del Carrito
                  </Button>
               )}
            </Box>
         </div>
      </>
   );
};
