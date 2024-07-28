import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isAddNewParam: false,
  longitude: true,
  socio: true,
  culture: true,
  currentGraph: 'bar'
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
  },
})

// Action creators are generated for each case reducer function
export const {
  addNewParamOption,
  setCulture,
  setLong,
  setSocio,
  setCurrentGraph
} = counterSlice.actions

export default counterSlice.reducer