import { Typography } from '@mui/material';
import React from 'react';
import { CardGrid } from '../components';
import { Footer } from '../components/Footer';

export const HomePage = () => {
   return (
      <div>
         <Typography variant='h6' component='div' sx={{ margin: '20px' }}>
            - Diseños mas recientes
         </Typography>
         <hr />
         <CardGrid />
      </div>
   );
};
