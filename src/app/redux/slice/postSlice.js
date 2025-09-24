// store/gigSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useAuth from "app/hooks/useAuth";

import axios from "axios";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";



//===================EDUCATION=====================//
export const PostLogin= createAsyncThunk(
  "PostLogin/POST",
  async ({ data }, { rejectWithValue }) => {
    try {
      const URL = `${process.env.REACT_APP_BASE_URL}Login/Login`;
      const response = await axios.post(URL, data, {
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const PostContactUS= createAsyncThunk(
  "PostContactUS/POST",
  async ({ idata }, { rejectWithValue }) => {
    try {
      const URL = "https://dvmtcreaapi.bexatm.com/api/Enquiry/SubmitEnquiry";
      const response = await axios.post(URL, idata, {
        headers: {
          Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
const postSlice = createSlice({
    name: 'postSlice',
  initialState: {
    user: null,
    loading: false,
    error: null,
     post: null,
    posts: [],
  },reducers: {
     addPost: (state, action) => {
      state.post = action.payload;       // Store latest post
      state.posts.push(action.payload);  // Keep history
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        // ✅ Store in sessionStorage
        sessionStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(PostLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
  });
  


export const { addPost } = postSlice.actions;
export default postSlice.reducer;
