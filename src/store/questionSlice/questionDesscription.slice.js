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
    setSecondQuestion: (state, action) => {
      state.secondQuestion = action.payload
    }
  }
})

export const {
  setSecondQuestion,
  setFirstQuestion,
} = questionSlice.actions;

export default questionSlice.reducer