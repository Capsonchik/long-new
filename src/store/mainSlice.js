import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isAddNewParam: false,
  longitude: true,
  socio: true,
  culture: true,
  currentGraph: 'bar',
  secondParam: false,
  filterDrawerStatus: false,
}

export const counterSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNewParamOption: (state, action) => {
      state.isAddNewParam = action.payload
    },
    setLong: (state, action) => {
      state.longitude = action.payload
    },
    setSocio: (state, action) => {
      state.socio = action.payload
    },
    setCulture: (state, action) => {
      state.culture = action.payload
    },
    setCurrentGraph: (state, action) => {
      state.currentGraph = action.payload
    },
    setSecondParams: (state, action) => {
      state.secondParam = action.payload
    },
    setFilterDrawerStatus: (state, action) => {
      state.filterDrawerStatus = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  addNewParamOption,
  setCulture,
  setLong,
  setSocio,
  setCurrentGraph,
  setSecondParams,
  setFilterDrawerStatus
} = counterSlice.actions

export default counterSlice.reducer