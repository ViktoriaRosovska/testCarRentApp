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

export const getAllAdverts = createAsyncThunk("adverts/getAllAdverts", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/adverts");
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

export const getFilterAdverts = createAsyncThunk("adverts/filterAdverts", async (searchQuery, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts`);
    let data = response.data;

    for (const field in searchQuery) {
      const value = searchQuery[field];
      if (value !== "") data = data.filter((d) => d[field] === value);
    }

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
