'use client';

import { createSlice } from '@reduxjs/toolkit';

interface IPageState {
  isPage: boolean;
}

const initialState: IPageState = {
  isPage: true,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    togglePage: (state) => {
      state.isPage = !state.isPage;
    },
  },
});

export const { togglePage } = pageSlice.actions;
export default pageSlice.reducer;
