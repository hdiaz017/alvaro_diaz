import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { dibujos } from '../helpers/dibujos';
import { CardImage } from './CardImage';

export const CardGrid = () => {
   const cards = dibujos.map((a) => (
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
         <CardImage image={a} />
      </Grid>
   ));
   return (
      <Box
         sx={{
            backgroundColor: '#e3e5e8',
         }}
      >
         <Typography
            variant='h3'
            component='div'
            sx={{ margin: '50px 100px 20px ' }}
         >
            Diseños
         </Typography>
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
      </Box>
   );
};
