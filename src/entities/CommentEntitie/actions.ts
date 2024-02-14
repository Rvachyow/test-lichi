import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../shared/api/axios';
import { IComment } from './types';

export const addCommentItem = createAsyncThunk(
  'comment/addComment',
  async ({
    id,
    fullText,
  }: {
    id: string;

    fullText: string;
  }) => {
    const comments = {
      text: fullText,
    };
    const { data } = await axios.post<IComment>(`/${id}/comments`, comments);

    return data;
  },
);

export const getAllComment = createAsyncThunk(
  'comment/getAllComment',
  async ({ id }: { id: string }) => {
    const { data } = await axios.get(`/${id}/comments`);

    return data;
  },
);
