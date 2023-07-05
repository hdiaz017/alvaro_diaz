import { Box, Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { dibujos } from '../helpers/dibujos';
import { Drawings } from '../store/slices/drawings/drawingsSlice';
import { RootState } from '../store/store';
import { CardImage } from './CardImage';
import { useEffect, useState } from 'react';

export const CardGrid = () => {
   const navigate = useNavigate();
   const drawings: Drawings[] = useSelector(
      (state: RootState) => state.drawings.drawings,
   );
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(6);
   useEffect(() => {
      if (drawings.length === 0) navigate('/');
   }, []);

   // Get items per page
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = drawings.slice(indexOfFirstItem, indexOfLastItem);

   const nextPage = () => {
      if (currentPage === numberOfPages) return;
      setCurrentPage((prev) => prev + 1);
   };
   const prevPage = () => {
      if (currentPage === 1) return;
      setCurrentPage((prev) => prev - 1);
   };

   const numberOfPages = Math.ceil(drawings.length / itemsPerPage);

   const cards = currentItems.map((d) => (
      <Grid
         key={d.id}
         item
         xs='auto'
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '15px',
         }}
      >
         <CardImage
            image={d.url}
            canvas={d.size}
            name={d.name}
            price={d.price}
            key={d.id}
            id={d.id}
         />
      </Grid>
   ));
   return (
      <Box
         sx={{
            backgroundColor: '#e3e5e8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}
         mt={5}
         mb={7}
      >
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: { xs: '100%', sm: '60%' },
            }}
         >
            <ArrowBackIosNewIcon
               onClick={prevPage}
               sx={{ fontSize: { xs: '30px', sm: '50px' }, cursor: 'pointer' }}
            />
            <Grid
               container
               sx={{
                  display: 'grid',
                  width: '100%',
                  gridTemplateColumns: {
                     xs: 'repeat(auto-fit, minmax(150px, 1fr))',
                     sm: 'repeat(auto-fit, minmax(250px, 1fr))',
                  },
                  gap: { xs: '1px', sm: '30px' },
               }}
            >
               {cards}
            </Grid>
            <ArrowForwardIosIcon
               onClick={nextPage}
               sx={{ fontSize: { xs: '30px', sm: '50px' }, cursor: 'pointer' }}
            />
         </Box>
      </Box>
   );
};
