import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Drawings } from '../drawings/drawingsSlice';

type InitialState = {
   cart: Drawings[];
   quantity: number;
};

const initialState: InitialState = {
   cart: [],
   quantity: 0,
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState: initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<Drawings>) => {
         const item = state.cart.find((item) => item.id === action.payload.id);
         if (item) return;
         state.cart.push(action.payload);
         state.quantity = state.cart.length;
      },
      removeFromCart: (state, action: PayloadAction<Drawings>) => {
         if (state.quantity === 0) return;
         let index = state.cart.findIndex(
            (item) => item.id === action.payload.id,
         );

         state.cart.splice(index, 1);
         state.quantity--;
      },
   },
});
// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;
