import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AboutSection } from '../components/AboutSection';
import { getDrawings } from '../store/slices/drawings/drawingsSlice';

import { AppDispatch } from '../store/store';

export const HomePage = () => {
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getDrawings());
   }, []);
   return (
      <div>
         <AboutSection />
      </div>
   );
};
