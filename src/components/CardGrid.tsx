import { Box, Grid } from '@mui/material';
import React from 'react';
import { CardImage } from './CardImage';

export const CardGrid = () => {
   const array = Array(10).fill('');

   const cards = array.map((a) => (
      <Grid
         item
         xs='auto'
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px',
         }}
      >
         <CardImage />
      </Grid>
   ));
   return (
      <Box
         sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
         }}
      >
         <Grid
            container
            spacing={0}
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
               width: '70%',
            }}
         >
            {cards}
         </Grid>
      </Box>
   );
};
