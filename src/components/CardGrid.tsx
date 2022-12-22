import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';

// import { dibujos } from '../helpers/dibujos';
import { RootState } from '../store/store';
import { Drawings } from '../store/slices/drawings/drawingsSlice';
import { CardImage } from './CardImage';

export const CardGrid = () => {
   const drawings: Drawings[] = useSelector(
      (state: RootState) => state.drawings.drawings,
   );

   const cards = drawings.map((d) => (
      <Grid
         key={d.id}
         item
         xs='auto'
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px',
         }}
      >
         <CardImage
            image={d.url}
            canvas='45x30'
            name={d.name}
            price={d.price}
            key={d.id}
            id={d.id}
         />
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
