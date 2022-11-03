import { createAsyncThunk } from "@reduxjs/toolkit";
import * as PhotoAPI from "../../share/Photo";

export const fetchPhotos = createAsyncThunk(
  "photos/getAllPhoto",
  async (_, { rejectWithValue }) => {
    try {
      const result = await PhotoAPI.allphoto();
      return result;
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error);
    }
  }
);

const operations = {
  fetchPhotos,
};

export default operations;
