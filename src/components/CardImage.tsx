import * as React from 'react';
import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography,
   Button,
} from '@mui/material';
import SVG from '../assets/react.svg';

export const CardImage = () => {
   return (
      <Box
         width={250}
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
         }}
      >
         <Card>
            <CardMedia
               component='img'
               height='250'
               image={SVG}
               alt='green iguana'
            />
            <CardContent>
               <Typography
                  gutterBottom
                  variant='h6'
                  component='p'
                  sx={{ fontSize: '1rem' }}
               >
                  Lizard $500.00
               </Typography>
            </CardContent>
         </Card>
      </Box>
   );
};
