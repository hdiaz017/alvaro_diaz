import { configureStore } from '@reduxjs/toolkit';

import { drawingsSlice } from './slices/drawings/drawingsSlice';
import { cartSlice } from './slices/cart/cartSlice';

export const store = configureStore({
   reducer: {
      drawings: drawingsSlice.reducer,
      cart: cartSlice.reducer,
   },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
