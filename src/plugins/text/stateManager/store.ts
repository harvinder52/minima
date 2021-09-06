import { combineReducers, configureStore } from '@reduxjs/toolkit';
import textsizeReducer from './textStates/textsizeSlice'
import textStyleReducer from  './textStates/textSyleSlice'
import fontFamilyReducer from './textStates/fontFamilySlice'

const store = configureStore({
  reducer: {
    textsize: textsizeReducer,
    textStyle: textStyleReducer,
    fontFamily: fontFamilyReducer,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch