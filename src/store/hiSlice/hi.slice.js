import {createSlice} from "@reduxjs/toolkit";

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
  }
})

export const {
  setHiLoader
} = hiSlice.actions

export default hiSlice.reducer