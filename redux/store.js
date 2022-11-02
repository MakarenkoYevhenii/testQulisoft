import { configureStore } from "@reduxjs/toolkit";
import PhotosReducer from "./photos/photo-slise";

const store = configureStore({
  reducer: { Photos: PhotosReducer },
});

export default store;
