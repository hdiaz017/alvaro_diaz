import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
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
   const subtotal = (items: readonly Drawings[]) => {
      return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
   };
   return (
      <TableContainer>
         <Table sx={{ maxWidth: 800 }}>
            <TableHead>
               <TableRow>
                  {headers.map((header) => (
                     <TableCell key={header} sx={{ color: 'black' }}>
                        {header}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow
                     key={row.name}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component='th' scope='row'>
                        <img
                           src={row.url}
                           alt={row.name}
                           style={{ height: '150px' }}
                        />
                     </TableCell>
                     <TableCell sx={{ color: 'black' }}>{row.name}</TableCell>
                     <TableCell sx={{ color: 'black' }}>45x30cm</TableCell>
                     <TableCell sx={{ color: 'black' }}>
                        <strong>{priceFormat.format(row.price)}</strong>
                     </TableCell>
                     <TableCell onClick={() => removeFromCartFunc(row)}>
                        <IconButton sx={{ color: 'red' }}>
                           <ClearIcon />
                        </IconButton>
                     </TableCell>
                  </TableRow>
               ))}
               <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2} sx={{ color: 'black' }}>
                     Subtotal ({quantity}{' '}
                     {quantity === 1 ? 'producto' : 'productos'})
                  </TableCell>
                  <TableCell sx={{ color: 'black' }}>
                     <strong> {priceFormat.format(subtotal(rows))}</strong>
                  </TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </TableContainer>
   );
};
