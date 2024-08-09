import {createSlice} from "@reduxjs/toolkit";
import {
  fetchGetBackData,
  fetchGetDefaultSunBurst,
  fetchGetNextSunBurst,
  fetchGetSunBurstBack
} from "./sunBurst.actions.js";

const initialState = {
  sunBurstData: [],
  key: 0,
  backData: ''
}

export const sunBurstSlice = createSlice({
  name: "sunBurst",
  initialState,
  reducers: {
    setSunBirstData: (state, action) => {
      state.sunBurstData = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetDefaultSunBurst.fulfilled, (state, action) => {
        state.sunBurstData = action.payload;
        state.key = state.key + 1;
      })
      .addCase(fetchGetDefaultSunBurst.pending, (state) => {
        state.sunBurstData = [];
      })
      .addCase(fetchGetNextSunBurst.fulfilled, (state, action) => {
        state.sunBurstData = action.payload;
        state.key = state.key + 1;
      })
      .addCase(fetchGetNextSunBurst.pending, (state) => {
        state.sunBurstData = [];
      })
      .addCase(fetchGetSunBurstBack.fulfilled, (state, action) => {
        state.sunBurstData = action.payload;
        state.key = state.key + 1;
      })
      .addCase(fetchGetBackData.fulfilled, (state, action) => {
        state.backData = action.payload;
      })
  }
})

export const {
  setSunBirstData,
} = sunBurstSlice.actions

export default sunBurstSlice.reducer