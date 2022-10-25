import { Typography } from '@mui/material';
import React from 'react';
import { CardGrid } from '../components';
import { ImageListAD } from '../components/ImageListAD';

export const HomePage = () => {
   return (
      <div>
         <Typography variant='h6' component='div' sx={{ margin: '20px' }}>
            - Diseños mas recientes
         </Typography>
         <hr />
         <CardGrid />
         <ImageListAD />
      </div>
   );
};
