import * as React from 'react';
import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Typography,
   Button,
} from '@mui/material';

type Card = {
   image: string;
};

export const CardImage = ({ image }: Card) => {
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
         <Card style={{ width: '250px' }}>
            <CardMedia
               component='img'
               height='250'
               image={image}
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
