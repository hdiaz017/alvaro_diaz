import { Box, Card, CardMedia, Typography } from '@mui/material';

import avatarPhoto from '../assets/about_photo.jpg';

export const AboutSection = () => {
   return (
      <Box
         component='section'
         sx={{
            height: '100vh',
            padding: '0px 100px 0px 100px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#e3e5e8',
         }}
      >
         <Typography
            sx={{
               width: '500px',
            }}
         >
            <strong>(In: alvin.diaz)</strong> Diseñador. Dibujante. Deportista.
            Artista. Opinión. Loco. Libre. Cuestionante.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            libero a quaerat numquam perferendis fuga quibusdam consequuntur
            quos exercitationem voluptas, ea doloremque laudantium inventore
            dignissimos consectetur quod, suscipit ipsum cupiditate.
         </Typography>
         <Card
            sx={{
               borderRadius: '20px',
            }}
         >
            <CardMedia
               component='img'
               height='500'
               image={avatarPhoto}
               alt='green iguana'
            />
         </Card>
      </Box>
   );
};
