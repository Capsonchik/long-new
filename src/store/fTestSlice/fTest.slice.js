import {createSlice} from "@reduxjs/toolkit";

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
  }
})

export const {setFtestLoader} = fTestSlice.actions;

export default fTestSlice.reducer