import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65554d8184b36e3a431dafef.mockapi.io/";

export const getAdverts = createAsyncThunk("adverts/getAdverts", async (page = 1, thunkAPI) => {
  try {
    const params = new URLSearchParams();
    params.append("page", page);
    params.append("limit", 12);
    const response = await axios.get(`/adverts?${params}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getAdvertById = createAsyncThunk("adverts/getAdvertById", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
