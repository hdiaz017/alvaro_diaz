import { configureStore } from '@reduxjs/toolkit';
import { drawingsSlice } from './slices/drawings/drawingsSlice';

export const store = configureStore({
   reducer: {
      drawings: drawingsSlice.reducer,
   },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
