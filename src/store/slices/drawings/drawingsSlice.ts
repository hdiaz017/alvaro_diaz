import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase/client';

export type Drawings = {
   id: number;
   created_at: string;
   name: string;
   url: string;
   price: number;
   size: string;
};

type InitialState = {
   isLoading: boolean;
   drawings: Drawings[];
   error: string | undefined;
};

const initialState: InitialState = {
   isLoading: false,
   drawings: [],
   error: '',
};

export const getDrawings = createAsyncThunk<Drawings[]>(
   'drawings/getDrawings',
   async (_, thunkApi) => {
      try {
         const { data } = await supabase.from('dibujos').select('*');
         return data;
      } catch (err) {
         const { error } = await supabase.from('dibujos').select('*');
         return thunkApi.rejectWithValue(error);
      }
   },
);

export const drawingsSlice = createSlice({
   name: 'drawings',
   initialState: initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getDrawings.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(
            getDrawings.fulfilled,
            (state, action: PayloadAction<Drawings[]>) => {
               if (state.drawings.length > 0) return;
               console.log(action);

               state.isLoading = false;
               state.drawings = action.payload;
            },
         )
         .addCase(getDrawings.rejected, (state, action) => {
            state.isLoading = false;
            state.drawings = [];
            state.error = action.error.message;
         });
   },
});
// Action creators are generated for each case reducer function
// export const { increment } = drawingsSlice.actions;
// export default drawingsSlice.reducer;
