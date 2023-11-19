import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavoriteAdvert(state, action) {
      if (!state.favorites.includes(action.payload)) state.favorites.push(action.payload);
    },
    deleteFavoriteAdvert(state, action) {
      const idx = state.favorites.findIndex((favorite) => favorite === action.payload);
      state.favorites.splice(idx, 1);
    },
  },
});

export const { addFavoriteAdvert, deleteFavoriteAdvert } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
