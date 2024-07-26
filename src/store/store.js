import {configureStore} from '@reduxjs/toolkit'
import mainSlice from './mainSlice.js'

export const store = configureStore({
  reducer: {
    main: mainSlice
  },
})