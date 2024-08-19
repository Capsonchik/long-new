import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  first: ''
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {}
})

export const {} = filterSlice.actions

export default filterSlice.reducer