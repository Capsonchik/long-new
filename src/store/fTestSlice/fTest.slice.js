import {createSlice} from "@reduxjs/toolkit";
import {fetchGetFtestData} from "./fTest.actions.js";

const initialState = {
  fTestData: [],
  fTestLoader: false
}

const fTestSlice = createSlice({
  name: "fTestSlice",
  initialState,
  reducers: {
    setFtestLoader: (state, action) => {
      state.fTestLoader = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetFtestData.fulfilled, (state, action) => {
        state.fTestData = action.payload
        state.fTestLoader = false
      })
      .addCase(fetchGetFtestData.pending, (state) => {
        state.fTestLoader = true
      })
  }
})

export const {
  setFtestLoader
} = fTestSlice.actions;

export default fTestSlice.reducer