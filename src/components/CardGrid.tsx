import { Grid } from '@mui/material';
import React from 'react';
import { CardImage } from './CardImage';

export const CardGrid = () => {
   const array = Array(10).fill('');

   const cards = array.map((a) => (
      <Grid item xs={3}>
         <CardImage />
      </Grid>
   ));
   return (
      <Grid
         container
         spacing={2}
         sx={{ maxWidth: '50%', border: '1px solid red' }}
      >
         {cards}
      </Grid>
   );
};
