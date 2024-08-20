import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  firstQuestion: null,
  secondQuestion: null,
}

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setFirstQuestion: (state, action) => {
      state.firstQuestion = action.payload
    },
    clearFirstQuestion: (state) => {
      state.firstQuestion = null
    },
    setSecondQuestion: (state, action) => {
      state.secondQuestion = action.payload
    },
    clearSecondQuestion: (state) => {
      state.secondQuestion = null
    },
  }
})

export const {
  setSecondQuestion,
  setFirstQuestion,
  clearSecondQuestion,
  clearFirstQuestion
} = questionSlice.actions;

export default questionSlice.reducer