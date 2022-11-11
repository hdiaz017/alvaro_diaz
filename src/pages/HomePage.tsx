import { Divider } from '@mui/material';
import { CardGrid } from '../components';
import { AboutSection } from '../components/AboutSection';

export const HomePage = () => {
   return (
      <div>
         <AboutSection />
         <Divider
            variant='middle'
            sx={{
               borderColor: '#272727',
            }}
         />
         <CardGrid />
      </div>
   );
};
