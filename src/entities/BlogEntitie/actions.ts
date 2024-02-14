import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../shared/api/axios';
import { IBlog } from './types';

export const getOneBlog = createAsyncThunk(
  'getOneBlog',
  async ({ id }: { id: string }) => {
    const { data } = await axios.get<IBlog>(
      `/${id}`,
    );
    return data;
  },
);

export const createBlogItem = createAsyncThunk(
  'blog/create',
  async ({
    fullText,
    description,
    title,
  }: {
    fullText: string;
    title: string;
    description: string;
  }) => {
    const dataBlog = {
      comments: [],
      description,
      fullText,
      title,
    };
    const { data } = await axios.post<IBlog>('', dataBlog);
    return data;
  },
);

export const deleteBlogItem = createAsyncThunk(
  'blog/deleat',
  async ({ id }: { id: string }) => {
    const { data } = await axios.delete<IBlog>(`/${id}`);
    return data;
  },
);

export const getBlogsItem = createAsyncThunk('blog/getBlogs', async () => {
  const { data } = await axios.get<IBlog[]>('');
  return data;
});

export const changeBlogItem = createAsyncThunk(
  'blog/changeItem',
  async ({
    id,
    title,
    fullText,
    description,
  }: {
    id: string;
    title: string;
    fullText: string;
    description: string;
  }) => {
    const dataBlog = {
      comments: [],
      description,
      fullText,
      title,
    };
    const { data } = await axios.put<IBlog>(`/${id}`, dataBlog);
    return data;
  },
);
