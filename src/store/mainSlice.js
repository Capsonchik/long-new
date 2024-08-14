import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isAddNewParam: false,
  currentGraph: 'bar',
  secondParam: false,
  filterDrawerStatus: false,
  switchBtn: false,
}

export const counterSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNewParamOption: (state, action) => {
      state.isAddNewParam = action.payload
    },
    setCurrentGraph: (state, action) => {
      state.currentGraph = action.payload
    },
    setSecondParams: (state, action) => {
      state.secondParam = action.payload
    },
    setFilterDrawerStatus: (state, action) => {
      state.filterDrawerStatus = action.payload
    },
    setSwitchBtn: (state, action) => {
      state.switchBtn = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setLong,
  setFilterDrawerStatus,
  setSwitchBtn
} = counterSlice.actions

export default counterSlice.reducer