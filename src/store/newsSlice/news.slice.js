import {createSlice} from "@reduxjs/toolkit";
import {fetchGetNews} from "./news.actions.js";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetNews.fulfilled, (state, action) => {
        state.news = action.payload
      })
  }
})

export default newsSlice.reducer