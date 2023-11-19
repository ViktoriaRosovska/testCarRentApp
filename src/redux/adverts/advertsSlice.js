import { createSlice } from "@reduxjs/toolkit";

import { getAdvertById, getAdverts, getAllAdverts, getFilterAdverts } from "./operations";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    advertById: {},
    filters: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFilterAdverts.fulfilled, (state, action) => {
        state.filters = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdvertById.fulfilled, (state, action) => {
        state.advertById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      );
  },
});

export const advertsReducer = advertsSlice.reducer;
