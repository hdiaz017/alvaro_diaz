import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SVG from '../assets/react.svg';

export const CardImage = () => {
   return (
      <Card sx={{ maxWidth: 250, maxHeight: 300 }}>
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
         {/* <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
         </CardActions> */}
      </Card>
   );
};
