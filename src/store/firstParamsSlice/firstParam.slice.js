import {createSlice} from "@reduxjs/toolkit";
import {
  fetchGetAnswers,
  fetchGetFifthParams,
  fetchGetFirstParams,
  fetchGetForthParams,
  fetchGetSecondParams,
  fetchGetThirdParams
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
  dataLoader: false
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
  setFifthBlockParamBlockId
} = firstParamsSlice.actions

export default firstParamsSlice.reducer