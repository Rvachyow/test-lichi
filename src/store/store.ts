import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from '@/entities/BlogEntitie/BlogEntitie';
import { commentReducer } from '@/entities/CommentEntitie/CommentEntitie';

export const makeStore = () => configureStore({
  reducer: {
    blog: blogReducer,
    comment: commentReducer,
  },
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
