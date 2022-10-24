import { Box, Grid } from '@mui/material';
import React from 'react';
import { CardImage } from './CardImage';

export const CardGrid = () => {
   const array = Array(10).fill('');

   const cards = array.map((a) => (
      <Grid item xs={4}>
         <CardImage />
      </Grid>
   ));
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
         }}
      >
         <Grid container spacing={6} sx={{ maxWidth: '50%', margin: 0 }}>
            {cards}
         </Grid>
      </Box>
   );
};
