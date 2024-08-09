import {createSlice} from "@reduxjs/toolkit";
import {
  fetchGetBackData,
  fetchGetDefaultSunBurst,
  fetchGetNextDefaultSunBurst,
  fetchGetNextSunBurst,
  fetchGetSecondSunBurst,
  fetchGetSunBurstBack
} from "./sunBurst.actions.js";

const initialState = {
  sunBurstData: [],
  key: 0,
  backData: '',
  nextSunBurstData: [],
  nextKey: 0,
  nextBackData: ''
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
      .addCase(fetchGetNextDefaultSunBurst.fulfilled, (state, action) => {
        state.nextSunBurstData = action.payload;
        state.nextKey = state.key + 1;
      })
      .addCase(fetchGetNextDefaultSunBurst.pending, (state) => {
        state.nextSunBurstData = []
      })
      .addCase(fetchGetSecondSunBurst.fulfilled, (state, action) => {
        state.nextSunBurstData = action.payload;
        state.nextKey = state.key + 1;
      })
      .addCase(fetchGetSecondSunBurst.pending, (state) => {
        state.nextSunBurstData = [];
      })
  }
})

export const {
  setSunBirstData,
} = sunBurstSlice.actions

export default sunBurstSlice.reducer