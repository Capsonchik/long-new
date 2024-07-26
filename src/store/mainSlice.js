import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isAddNewParam: false,
}

export const counterSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNewParamOption: (state, action) => {
      state.isAddNewParam = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const {
  addNewParamOption,
} = counterSlice.actions

export default counterSlice.reducer