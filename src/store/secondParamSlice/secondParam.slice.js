import {createSlice} from "@reduxjs/toolkit";
import {
  fetchGetNextAnswers,
  fetchGetNextFifthParams,
  fetchGetNextFirstParams,
  fetchGetNextForthParams,
  fetchGetNextSecondParams,
  fetchGetNextThirdParams,
  fetchPostNextGraphData
} from "./secondParam.actions.js";

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
  nextParamFifthBlockScaleType: '',
  nextParamAnswers: [],
  nextParamAnswerTitle: '',
  nextParamDataLoader: false,
  nextParamGraphData: null,
  dataToSend: {
    block_6_id: [],
    answ: []
  },
  isParamDone: false,
  answers: [],
  answerTitle: '',
  formatter: 'percentage'

}

export const secondParamsSlice = createSlice({
  name: 'secondParam',
  initialState,
  reducers: {
    setNextParamFirstBlockParamBlockId: (state, action) => {
      state.nextParamFirstBlockParamBlockId = action.payload
    },
    setNextParamFirstBlockParamBlockCategoryId: (state, action) => {
      state.nextParamFirstBlockParamBlockCategoryId = action.payload
    },
    setNextParamSecondBlockParamBlockId: (state, action) => {
      state.nextParamSecondBlockParamBlockId = action.payload
    },
    setNextParamSecondBlockParamBlockCategoryId: (state, action) => {
      state.nextParamSecondBlockParamBlockCategoryId = action.payload
    },
    setNextParamThirdBlockParamBlockId: (state, action) => {
      state.nextParamThirdBlockParamBlockId = action.payload
    },
    setNextParamThirdBlockParamBlockCategoryId: (state, action) => {
      state.nextParamThirdBlockParamBlockCategoryId = action.payload
    },
    setNextParamForthBlockParamBlockId: (state, action) => {
      state.nextParamForthBlockParamBlockId = action.payload
    },
    setNextParamForthBlockParamBlockCategoryId: (state, action) => {
      state.nextParamForthBlockParamBlockCategoryId = action.payload
    },
    setNextParamFifthBlockParamBlockId: (state, action) => {
      state.nextParamFifthBlockParamBlockId = action.payload
    },
    setNextParamFifthBlockParamBlockCategoryId: (state, action) => {
      state.nextParamFifthBlockParamBlockCategoryId = action.payload
    },
    setNextParamFifthBlockScaleType: (state, action) => {
      state.nextParamFifthBlockScaleType = action.payload
    },
    setIsSecondParamDone: (state, action) => {
      state.isParamDone = action.payload
    },
    setNextAnswerTitle: (state, action) => {
      state.answerTitle = action.payload
    },
    setFormatter: (state, action) => {
      state.formatter = action.payload
    },
    clearGraphData: (state) => {
      state.nextParamGraphData = null
    }
  },
  extraReducers: builder =>
    builder
      .addCase(fetchGetNextFirstParams.fulfilled, (state, action) => {
        state.nextParamFirstBlock = action.payload
      })
      .addCase(fetchGetNextSecondParams.fulfilled, (state, action) => {
        state.nextParamSecondBlock = action.payload
      })
      .addCase(fetchGetNextThirdParams.fulfilled, (state, action) => {
        state.nextParamThirdBlock = action.payload
      })
      .addCase(fetchGetNextForthParams.fulfilled, (state, action) => {
        state.nextParamForthBlock = action.payload
      })
      .addCase(fetchGetNextFifthParams.fulfilled, (state, action) => {
        state.nextParamFifthBlock = action.payload
      })
      .addCase(fetchGetNextAnswers.fulfilled, (state, action) => {
        state.answers = action.payload
      })
      .addCase(fetchPostNextGraphData.fulfilled, (state, action) => {
        state.nextParamGraphData = action.payload
      })
})

export const {
  setNextParamFirstBlockParamBlockId,
  setNextParamFirstBlockParamBlockCategoryId,
  setNextParamThirdBlockParamBlockId,
  setNextParamFifthBlockParamBlockId,
  setNextParamForthBlockParamBlockCategoryId,
  setNextParamForthBlockParamBlockId,
  setNextParamSecondBlockParamBlockCategoryId,
  setNextParamSecondBlockParamBlockId,
  setNextParamThirdBlockParamBlockCategoryId,
  setNextParamFifthBlockParamBlockCategoryId,
  setNextParamFifthBlockScaleType,
  setIsSecondParamDone,
  setNextAnswerTitle,
  setFormatter,
  clearGraphData
} = secondParamsSlice.actions
export default secondParamsSlice.reducer