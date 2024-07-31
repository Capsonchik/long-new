import {configureStore} from '@reduxjs/toolkit'
import mainSlice from './mainSlice.js'
import firstParamSlice from './firstParamsSlice/firstParam.slice.js'
import secondParamSlice from './secondParamSlice/secondParam.slice.js'

export const store = configureStore({
  reducer: {
    main: mainSlice,
    firstParam: firstParamSlice,
    secondParam: secondParamSlice,
  },
})