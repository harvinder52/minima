import { combineReducers, configureStore } from '@reduxjs/toolkit';
import textsizeReducer from './textStates/textsizeSlice'
import textStyleReducer from  './textStates/textSyleSlice'

const store = configureStore({
  reducer: {
    textsize: textsizeReducer,
    textStyle: textStyleReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch