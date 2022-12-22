import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

type Card = {
   canvas: string;
   image: string;
   price?: number;
   name?: string;
   id: number;
};

export const CardImage = ({
   canvas = '45x30cm',
   image,
   price = 500,
   name,
}: Card) => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
         }}
      >
         <Card
            style={{
               width: '250px',
               objectFit: 'fill',
               backgroundSize: 'cover',
            }}
         >
            <CardMedia
               component='img'
               height='300'
               image={image}
               alt='green iguana'
            />
            <CardContent
               style={{
                  display: 'flex',
                  flexFlow: 'column wrap',
                  padding: '10px 20px',
                  backgroundColor: '#262726',
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{ fontSize: '1rem' }}
                  >
                     {name}
                  </Typography>
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{ fontSize: '1rem', marginRight: '1rem' }}
                  >
                     ${price}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{ fontSize: '1rem', marginRight: '1rem' }}
                  >
                     {canvas}
                  </Typography>
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{ fontSize: '1rem', marginRight: '1rem' }}
                  >
                     -&gt;
                  </Typography>
               </Box>
            </CardContent>
         </Card>
      </Box>
   );
};
