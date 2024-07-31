import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  nextParamFirstBlock: [],
  nextParamFirstBlockParamBlockId: '',
  nextParamFirstBlockParamBlockCategoryId: null,
  nextParamSecondBlock: [],
  nextParamSecondBlockParamBlockId: '',
  nextParamSecondBlockParamBlockCategoryId: null,
  nextParamThirdBlock: [],
  nextParamThirdBlockParamBlockId: '',
  nextParamThirdBlockParamBlockCategoryId: null,
  nextParamForthBlock: [],
  nextParamForthBlockParamBlockId: '',
  nextParamForthBlockParamBlockCategoryId: null,
  nextParamFifthBlock: [],
  nextParamFifthBlockParamBlockId: '',
  nextParamFifthBlockParamBlockCategoryId: null,
  nextParamAnswers: [],
  nextParamAnswerTitle: '',
  nextParamDataLoader: false,
  nextParamGraphData: null,
  dataToSend: {
    block_6_id: [],
    answ: []
  }
}

export const secondParamsSlice = createSlice({
  name: 'secondParam',
  initialState,
  reducers: {}
})

export const {} = secondParamsSlice.actions
export default secondParamsSlice.reducer