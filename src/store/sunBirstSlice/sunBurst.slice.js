import {createSlice} from "@reduxjs/toolkit";
import {fetchGetDefaultSunBurst} from "./sunBurst.actions.js";

const initialState = {
  sunBurstData: [],
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
      })
  }
})

export const {
  setSunBirstData,
} = sunBurstSlice.actions

export default sunBurstSlice.reducer