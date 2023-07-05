import * as React from 'react';
import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Icon,
   styled,
   Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type Card = {
   canvas: string;
   image: string;
   price?: number;
   name?: string;
   id: number;
};

export const CardImage = ({ canvas, image, price = 500, name, id }: Card) => {
   const navigate = useNavigate();
   const priceFormat = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
   });

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
            sx={{
               width: { xs: '150px', sm: '250px' },
               objectFit: 'fill',
               backgroundSize: 'cover',
               cursor: 'pointer',
            }}
            onClick={() => navigate(`/image/${id}`)}
         >
            <CardMedia
               component='img'
               sx={{ height: { xs: '150px', sm: ' 250px' } }}
               image={image}
               alt={name}
            />
            <CardContent
               style={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  justifyContent: 'space-between',
                  padding: '10px 20px',
                  backgroundColor: '#262726',
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexFlow: 'column wrap',
                     justifyContent: 'left',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{ fontSize: { xs: '.75rem', sm: '1rem' } }}
                  >
                     {name}
                  </Typography>
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{
                        fontSize: { xs: '.75rem', sm: '1rem' },
                        marginRight: { xs: '.75rem', sm: '1rem' },
                     }}
                  >
                     {priceFormat.format(price)}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'right',
                     alignItems: 'center',
                  }}
               >
                  <Typography
                     gutterBottom
                     variant='h6'
                     component='p'
                     sx={{
                        fontSize: '1rem',
                        marginRight: { xs: '.75rem', sm: '1rem' },
                     }}
                  >
                     <ArrowForwardIcon />
                  </Typography>
               </Box>
            </CardContent>
         </Card>
      </Box>
   );
};
