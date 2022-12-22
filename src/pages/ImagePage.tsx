import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Drawings } from '../store/slices/drawings/drawingsSlice';
import { useEffect } from 'react';
import { Button, Typography } from '@mui/material';

export const ImagePage = () => {
   const items = useSelector((state: RootState) => state.drawings.drawings);
   const { id } = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   const item: Drawings | undefined = items.find((i) => i.id == parseInt(id));

   return (
      <>
         <div
            style={{
               height: '100vh',
               display: 'flex',
               justifyContent: 'space-around',
               alignItems: 'center',
               margin: '0px 300px 0px 100px',
            }}
         >
            <img
               src={item?.url}
               alt={item?.name}
               style={{ height: '700px', borderRadius: '20px' }}
            />
            <div>
               <Typography>
                  <strong>Título: </strong> {item?.name}
               </Typography>
               <Typography>
                  <strong>Precio: </strong> {item?.price}
               </Typography>
               <Typography>
                  <strong>Tamaño: </strong> 45x30cm
               </Typography>
               <Button
                  style={{ backgroundColor: '#2262cc', color: 'white' }}
                  variant='contained'
               >
                  Agregar al Carrito
               </Button>
            </div>
         </div>
      </>
   );
};
