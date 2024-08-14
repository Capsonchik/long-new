import {configureStore} from '@reduxjs/toolkit'
import mainSlice from './mainSlice.js'
import firstParamSlice from './firstParamsSlice/firstParam.slice.js'
import secondParamSlice from './secondParamSlice/secondParam.slice.js'
import sunBurstSlice from './sunBirstSlice/sunBurst.slice.js'
import corelationSlice from './corelationSlice/corelation.slice.js'
import fTestSlice from './fTestSlice/fTest.slice.js'
import hiSlice from './hiSlice/hi.slice.js'

export const store = configureStore({
  reducer: {
    main: mainSlice,
    firstParam: firstParamSlice,
    secondParam: secondParamSlice,
    sunBurst: sunBurstSlice,
    corelation: corelationSlice,
    fTest: fTestSlice,
    hi: hiSlice
  },
})