import {createSlice} from "@reduxjs/toolkit";

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
  }
})

export const {
  setCorelationLoader,
} = corelationSlice.actions

export default corelationSlice.reducer