import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  currentTheme: 'dark' | 'light';
}

const initialState: ThemeState = {
  currentTheme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.currentTheme = action.payload;
      console.log('свічнули тему', action);
    },
    getTheme: (state) => state,
  },
});

export const { setTheme, getTheme } = themeSlice.actions;
export default themeSlice.reducer;
