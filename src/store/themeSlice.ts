import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { THEME } from '@/common/constans/themes';

export interface ThemeState {
  currentTheme: THEME.LIGHT | THEME.DARK;
}

const initialState: ThemeState = {
  currentTheme: THEME.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEME.LIGHT | THEME.DARK>) => {
      state.currentTheme = action.payload;
    },
    getTheme: (state) => state,
  },
});

export const { setTheme, getTheme } = themeSlice.actions;
export default themeSlice.reducer;
