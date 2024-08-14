import {createSlice} from "@reduxjs/toolkit";
import {fetchGetHiData} from "./hi.actions.js";

const initialState = {
  hiData: [],
  hiLoader: false
}

const hiSlice = createSlice({
  name: "hiSlice",
  initialState,
  reducers: {
    setHiLoader: (state, action) => {
      state.hiLoader = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetHiData.fulfilled, (state, action) => {
        state.hiData = action.payload
        state.hiLoader = false
      })
      .addCase(fetchGetHiData.pending, (state) => {
        state.hiLoader = true
      })
  }
})

export const {
  setHiLoader
} = hiSlice.actions

export default hiSlice.reducer