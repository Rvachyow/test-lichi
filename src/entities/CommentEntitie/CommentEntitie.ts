/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addCommentItem, getAllComment } from './actions';
import { IDataComment } from './types';

const initialState: IDataComment = {
  data: [],
};
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCommentItem.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(getAllComment.pending, (state) => {
        state.data = [];
      })
      .addCase(getAllComment.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const commentReducer = commentSlice.reducer;
