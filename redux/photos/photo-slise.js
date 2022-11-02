import { fetchPhotos } from "./photos-operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const PhotoSlise = createSlice({
  name: "Photos",
  initialState,
  extraReducers: {
    [fetchPhotos.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPhotos.fulfilled]: (state, { payload }) => {
      state.items = [...payload];
      state.loading = false;
    },
    [fetchPhotos.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default PhotoSlise.reducer;
