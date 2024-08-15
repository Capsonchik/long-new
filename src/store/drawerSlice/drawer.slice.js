import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  analiticDrawer: false,
  spaceAndTimeDrawer: false,
  infoDrawer: false,
  externalDrawer: false,
  reportDrawer: false,
}

const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    setAnaliticDrawer: (state, action) => {
      state.analiticDrawer = action.payload;
    },
    setInfoDrawer: (state, action) => {
      state.infoDrawer = action.payload;
    },
    setExternalDrawer: (state, action) => {
      state.externalDrawer = action.payload;
    },
    setReportDrawer: (state, action) => {
      state.reportDrawer = action.payload;
    },
    setSpaceAndTimeDrawer: (state, action) => {
      state.spaceAndTimeDrawer = action.payload;
    }
  }
})

export const {
  setAnaliticDrawer,
  setSpaceAndTimeDrawer,
  setExternalDrawer,
  setInfoDrawer,
  setReportDrawer
} = drawerSlice.actions;

export default drawerSlice.reducer;