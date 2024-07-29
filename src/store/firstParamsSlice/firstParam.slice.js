import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  firstParamCategory: '',
  firstParamCategoryData: []
}

export const firstParamsSlice = createSlice({
  name: "firstParams",
  initialState,
  reducers: {
    setFirstParamCategory: (state, action) => {
      state.firstParamCategory = action.payload
    },
    setFirstParamCategoryData: (state, action) => {
      state.firstParamCategoryData = action.payload
    }
  }
})

export const {
  setFirstParamCategory,
  setFirstParamCategoryData
} = firstParamsSlice.actions

export default firstParamsSlice.reducer