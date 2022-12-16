import { createSlice } from '@reduxjs/toolkit';

export const drawingsSlice = createSlice({
   name: 'drawings',
   initialState: {
      isLoading: false,
      drawings: [],
   },
   reducers: {
      startLoadingDrawigns: (state /* action */) => {
         state.isLoading = true;
      },
      setDrawings: (state, action) => {
         state.isLoading = false;
         state.drawings = action.payload;
      },
   },
});
// Action creators are generated for each case reducer function
export const { startLoadingDrawigns, setDrawings } = drawingsSlice.actions;
