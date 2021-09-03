import { configureStore } from '@reduxjs/toolkit';
import textsizeReducer from './textStates/textsizeSlice'
import {textsize} from './textStates/textsizeSlice'

export const store = configureStore({
  reducer: {
    root: textsizeReducer
  },
})



export default store
export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch