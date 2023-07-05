import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
   Box,
   Button,
   Card,
   CardMedia,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import { Drawings } from '../store/slices/drawings/drawingsSlice';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { removeFromCart } from '../store/slices/cart/cartSlice';
import { AppDispatch } from '../store/store';

export const CartTable = () => {
   const dispatch = useDispatch<AppDispatch>();
   const { cart: rows, quantity } = useSelector(
      (state: RootState) => state.cart,
   );
   const headers = ['Ilustración', 'Nombre', 'Tamaño', 'Precio', ''];
   const removeFromCartFunc = (item: Drawings | undefined) => {
      if (item) {
         dispatch(removeFromCart(item));
      }
   };
   const priceFormat = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
   });
   const subtotalPrice = rows
      .map(({ price }) => price)
      .reduce((sum, i) => sum + i, 0);

   const iva = subtotalPrice * 0.16;

   const totalPrice = subtotalPrice + iva + 100;
   return (
      <Box
         sx={{
            display: 'flex',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            justifyContent: { xs: 'center', sm: 'space-around' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            marginBottom: '5em',
            // border: '1px solid red',
         }}
      >
         <Box
            sx={{
               // maxWidth: { xs: 50, sm: 800 },
               width: '100%',
            }}
         >
            <Typography
               variant='h3'
               component='p'
               mb={2}
               sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
            >
               Carrito
            </Typography>
            <TableContainer>
               <Table
                  stickyHeader
                  sx={{
                     maxWidth: { xs: 50, sm: 500, lg: 800, xl: 1200 },
                     width: '100vw',
                  }}
               >
                  <TableHead>
                     <TableRow>
                        {headers.map((header) => (
                           <TableCell
                              sx={{ backgroundColor: '#272727' }}
                              key={header}
                           >
                              {header}
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows.map((row) => (
                        <TableRow
                           key={row.name}
                           sx={{
                              '&:last-child td, &:last-child th': {
                                 border: 0,
                              },
                           }}
                        >
                           <TableCell component='th' scope='row'>
                              <Card>
                                 <CardMedia
                                    component='img'
                                    image={row.url}
                                    alt={row.name}
                                    sx={{
                                       height: { xs: '100px', sm: '150px' },
                                       outline: '1px solid lightgrey',
                                    }}
                                 />
                              </Card>
                           </TableCell>
                           <TableCell sx={{ color: 'black' }}>
                              {row.name}
                           </TableCell>
                           <TableCell sx={{ color: 'black' }}>
                              45x30cm
                           </TableCell>
                           <TableCell sx={{ color: 'black' }}>
                              <strong>{priceFormat.format(row.price)}</strong>
                           </TableCell>
                           <TableCell onClick={() => removeFromCartFunc(row)}>
                              <IconButton sx={{ color: '#ad1a0a' }}>
                                 <ClearIcon />
                              </IconButton>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Typography variant='h4' component='p' mt={8} mb={2}>
               Subtotal <br />({quantity}{' '}
               {quantity === 1 ? 'producto' : 'productos'}
               ): {priceFormat.format(subtotalPrice)}
            </Typography>
            <Button
               color='primary'
               variant='text'
               fullWidth
               style={{
                  backgroundColor: '#2262cc',
                  color: 'white',
               }}
            >
               Proceder al pago
            </Button>
         </Box>
      </Box>
   );
};
