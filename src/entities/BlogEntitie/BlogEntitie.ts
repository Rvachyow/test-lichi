/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { findAndReplace } from '@/shared/lib/findAndReplace';
import { IDataState } from './types';
import {
  createBlogItem,
  getBlogsItem,
  deleteBlogItem,
  changeBlogItem,
  getOneBlog,
} from './actions';

const initialState: IDataState = {
  data: [],
  filtred: [],
  blog: {
    createdAt: '',
    comments: [],
    description: '',
    fullText: '',
    title: '',
    id: '',
  },
  status: 'loading',
};
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    filterSearch(state, action: PayloadAction<{ text: string }>) {
      state.filtred = state.data.filter((item) => {
        const title = item.title.toLowerCase();

        return title.includes(action.payload.text.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
      .addCase(createBlogItem.pending, () => {})
      .addCase(createBlogItem.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
        state.filtred = state.data;
        state.status = 'success';
      })
      .addCase(getBlogsItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBlogsItem.fulfilled, (state, action) => {
        state.data = action.payload;
        state.filtred = state.data;
        state.status = 'loaded';
      })
      .addCase(deleteBlogItem.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
        state.filtred = state.data;
      })
      .addCase(changeBlogItem.fulfilled, (state, action) => {
        state.data = findAndReplace(state.data, action.payload);
        state.filtred = state.data;
      });
  },
});
export const { filterSearch } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
