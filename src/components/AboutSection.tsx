import { Box, Card, CardMedia, Typography } from '@mui/material';

import avatarPhoto from '../assets/about_photo.jpg';

export const AboutSection = () => {
   return (
      <Box
         component='section'
         sx={{
            height: '100vh',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#e3e5e8',
         }}
      >
         <Typography
            align='justify'
            sx={{
               width: '500px',
            }}
         >
            <strong>(In: alvin.diaz)</strong> Diseñador. Dibujante. Deportista.
            Artista. Opinión. Loco. Libre. Cuestionante.
            <br />
            <br />
            El arte cura, el arte sana, libera y transmuta.
            <br />
            <br />
            Fue un viaje que inició en la inocencia, atravesando el dolor, la
            decepción, el rompimiento de la más pura ilusión, chocarse con la
            cruda realidad. Pero ha valido las lágrimas y las heridas.
            <br />
            <br />
            Este yo soy, en alma, cuerpo y corazón. Con todos mis colores, todas
            mis formas. Esta es mi interpretación de lo que me ha hecho sentir
            la vida en esta encarnación, más allá de lo físico.
            <br />
            <br />
            Bienvenido a mi puta cabeza.
            <br />
            Alvaro Díaz
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
