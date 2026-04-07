import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavState = Record<string, number[]>; // ← number[], а не Film[]

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {} as FavState,
  reducers: {
    addFavorite: (
      state,
      { payload }: PayloadAction<{ user: string; filmId: number }>
    ) => {
      const list = state[payload.user] ?? [];
      if (!list.includes(payload.filmId)) {
        state[payload.user] = [...list, payload.filmId];
      }
    },
    removeFavorite: (
      state,
      { payload }: PayloadAction<{ user: string; filmId: number }>
    ) => {
      const list = state[payload.user] ?? [];
      state[payload.user] = list.filter((id) => id !== payload.filmId);
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
