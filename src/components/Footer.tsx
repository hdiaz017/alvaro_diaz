import {
   AppBar,
   Box,
   Divider,
   Grid,
   IconButton,
   Link,
   Stack,
   Toolbar,
   Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

export const Footer = () => {
   return (
      <AppBar
         position='static'
         color='primary'
         sx={{
            top: 'auto',
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            marginTop: '50px',
         }}
      >
         <Toolbar>
            <Typography variant='body1' component='div' marginRight={3}>
               2022 © Alvaro Díaz
            </Typography>

            <Divider orientation='vertical' flexItem variant='middle' />
            <Stack spacing={2} direction='row' marginLeft={2}>
               <Link
                  href='https://www.facebook.com/alvaro.diaz.9237'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <FacebookIcon />
                  </IconButton>
               </Link>
               <Link
                  href='https://twitter.com/Alvincouture'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <TwitterIcon />
                  </IconButton>
               </Link>

               <Link
                  href='https://www.instagram.com/alvin.diaz/'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <InstagramIcon />
                  </IconButton>
               </Link>
            </Stack>
         </Toolbar>
      </AppBar>
   );
};
