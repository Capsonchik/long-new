import {createSlice} from "@reduxjs/toolkit";
import {fetchGetCorelationData} from "./corelation.actions.js";

const initialState = {
  corelationData: [],
  corelationLoader: false
}

const corelationSlice = createSlice({
  name: "corelation",
  initialState,
  reducers: {
    setCorelationLoader: (state, action) => {
      state.corelationLoader = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetCorelationData.fulfilled, (state, action) => {
        state.corelationData = action.payload
        state.corelationLoader = false
      })
      .addCase(fetchGetCorelationData.pending, (state) => {
        state.corelationLoader = true
      })
  }
})

export const {
  setCorelationLoader,
} = corelationSlice.actions

export default corelationSlice.reducer