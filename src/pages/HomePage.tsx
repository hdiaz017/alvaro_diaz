import { Divider } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardGrid } from '../components';
import { AboutSection } from '../components/AboutSection';
import {
   setDrawings,
   startLoadingDrawigns,
} from '../store/slices/drawings/drawingsSlice';
import { supabase } from '../supabase/client';

export const HomePage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchDrawings = async () => {
         dispatch(startLoadingDrawigns());
         let { data: dibujos, error } = await supabase
            .from('dibujos')
            .select('*');

         dispatch(setDrawings(dibujos));
      };

      fetchDrawings();
   }, []);

   return (
      <div>
         <AboutSection />
      </div>
   );
};
