import {createSlice} from "@reduxjs/toolkit";
import {
  fetchGetAnswers,
  fetchGetFifthParams,
  fetchGetFirstParams,
  fetchGetForthParams,
  fetchGetSecondParams,
  fetchGetThirdParams,
  fetchPostGraphData
} from "./firstParam.actions.js";


const initialState = {
  firstBlock: [],
  firstBlockParamBlockId: '',
  firstBlockParamBlockCategoryId: null,
  secondBlock: [],
  secondBlockParamBlockId: '',
  secondBlockParamBlockCategoryId: null,
  thirdBlock: [],
  thirdBlockParamBlockId: '',
  thirdBlockParamBlockCategoryId: null,
  forthBlock: [],
  forthBlockParamBlockId: '',
  forthBlockParamBlockCategoryId: null,
  fifthBlock: [],
  fifthBlockParamBlockId: '',
  fifthBlockParamBlockCategoryId: null,
  answers: [],
  answerTitle: '',
  dataLoader: false,
  graphData: null,
  dataToSend: {
    question1: null,
    question2: null,
    answ1: [],
    answ2: []
  },
  isFirstParamDone: false
}

export const firstParamsSlice = createSlice({
  name: "firstParams",
  initialState,
  reducers: {
    setFirstParamCategoryData: (state, action) => {
      state.firstParamCategoryData = action.payload
    },
    setFirstBlockParamBlockId: (state, action) => {
      state.firstBlockParamBlockId = action.payload
    },
    setFirstBlockParamCategoryId: (state, action) => {
      state.firstBlockParamBlockCategoryId = action.payload
    },
    setSecondBlockParamBlockId: (state, action) => {
      state.secondBlockParamBlockId = action.payload
    },
    setSecondBlockParamBlockCategoryId: (state, action) => {
      state.secondBlockParamBlockCategoryId = action.payload
    },
    setThirdBlockParamBlockId: (state, action) => {
      state.thirdBlockParamBlockId = action.payload
    },
    setThirdBlockParamBlockCategoryId: (state, action) => {
      state.thirdBlockParamBlockCategoryId = action.payload
    },
    setForthBlockParamBlockId: (state, action) => {
      state.forthBlockParamBlockId = action.payload
    },
    setForthBlockParamBlockCategoryId: (state, action) => {
      state.forthBlockParamBlockCategoryId = action.payload
    },
    setFifthBlockParamBlockId: (state, action) => {
      state.fifthBlockParamBlockId = action.payload
    },
    setFifthBlockParamBlockCategoryId: (state, action) => {
      state.fifthBlockParamBlockCategoryId = action.payload
    },
    setAnswerTitle: (state, action) => {
      state.answerTitle = action.payload
    },
    setQuestion1: (state, action) => {
      state.dataToSend.question1 = action.payload;
    },
    setQuestion2: (state, action) => {
      state.dataToSend.question2 = action.payload;
    },
    setAnsw1: (state, action) => {
      state.dataToSend.answ1 = action.payload;
    },
    setAnsw2: (state, action) => {
      state.dataToSend.answ2 = action.payload;
    },
    setIsFirstParamDone: (state, action) => {
      state.isFirstParamDone = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetFirstParams.fulfilled, (state, action) => {
        state.firstBlock = action.payload
      })
      .addCase(fetchGetSecondParams.fulfilled, (state, action) => {
        state.secondBlock = action.payload
      })
      .addCase(fetchGetThirdParams.fulfilled, (state, action) => {
        state.thirdBlock = action.payload
      })
      .addCase(fetchGetForthParams.fulfilled, (state, action) => {
        state.forthBlock = action.payload
      })
      .addCase(fetchGetFifthParams.fulfilled, (state, action) => {
        state.fifthBlock = action.payload
      })
      .addCase(fetchGetAnswers.fulfilled, (state, action) => {
        state.answers = action.payload
        state.dataLoader = false
      })
      .addCase(fetchGetAnswers.pending, (state) => {
        state.dataLoader = true
      })
      .addCase(fetchPostGraphData.fulfilled, (state, action) => {
        state.graphData = action.payload
      })

  }
})

export const {
  setFirstParamCategory,
  setFirstBlockParamBlockId,
  setFirstBlockParamCategoryId,
  setSecondBlockParamBlockId,
  setSecondBlockParamBlockCategoryId,
  setFirstParamCategoryData,
  setThirdBlockParamBlockCategoryId,
  setThirdBlockParamBlockId,
  setForthBlockParamBlockCategoryId,
  setForthBlockParamBlockId,
  setFifthBlockParamBlockCategoryId,
  setFifthBlockParamBlockId,
  setAnswerTitle,
  setBlockId,
  setBlockAnswers,
  setIsFirstParamDone,
  setAnsw1,
  setAnsw2,
  setQuestion1,
  setQuestion2
} = firstParamsSlice.actions

export default firstParamsSlice.reducer