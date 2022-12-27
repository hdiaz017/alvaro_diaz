import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material';

export const CartTable = () => {
   const rows = useSelector((state: RootState) => state.cart.cart);
   const priceFormat = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
   });
   return (
      <TableContainer>
         <Table sx={{ maxWidth: 800 }} bgcolor='#1f232a'>
            <TableHead>
               <TableRow>
                  <TableCell>Ilustración</TableCell>
                  <TableCell align='right'>Nombre</TableCell>
                  <TableCell align='right'>Tamaño</TableCell>
                  <TableCell align='right'>Precio</TableCell>
                  <TableCell align='right'></TableCell>
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
                     <TableCell align='right'>{row.name}</TableCell>
                     <TableCell align='right'>45x30cm</TableCell>
                     <TableCell align='right'>
                        {priceFormat.format(row.price)}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};
