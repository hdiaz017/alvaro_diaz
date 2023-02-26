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
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
   return (
      <AppBar
         position='fixed'
         color='primary'
         sx={{
            top: 'auto',
            bottom: 0,
            backgroundColor: 'black',
            color: 'white',
         }}
      >
         <Toolbar
            sx={{
               display: 'flex',
               justifyContent: 'space-around',
            }}
         >
            <Typography
               variant='body1'
               component='div'
               // marginRight={5}
               fontSize='.85rem'
               fontWeight={100}
            >
               Copyright 2022 © Alvaro Díaz
            </Typography>

            {/* <Divider orientation='vertical' flexItem variant='middle' /> */}
            <Box></Box>
            <Stack spacing={2} direction='row' marginLeft={2}>
               <Link
                  href='https://www.facebook.com/alvaro.diaz.9237'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <FacebookIcon fontSize='small' />
                  </IconButton>
               </Link>
               {/* <Link
                  href='https://twitter.com/Alvincouture'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <TwitterIcon fontSize='small' />
                  </IconButton>
               </Link> */}

               <Link
                  href='https://www.instagram.com/alvaro.diaz.arte/'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <InstagramIcon fontSize='small' />
                  </IconButton>
               </Link>
               {/* <Link
                  href='https://t.me/AlvinGrana'
                  rel='noopener'
                  target='_blank'
               >
                  <IconButton>
                     <TelegramIcon fontSize='small' />
                  </IconButton>
               </Link> */}
            </Stack>
         </Toolbar>
      </AppBar>
   );
};
