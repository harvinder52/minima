import { combineReducers, configureStore } from '@reduxjs/toolkit';
import textsizeReducer from './textStates/textsizeSlice'
import textStyleReducer from  './textStates/textSyleSlice'
import fontFamilyReducer from './textStates/fontFamilySlice'
import hideTextReducer from  './textStates/hideTextSlice'


const store = configureStore({
  reducer: {
    textsize: textsizeReducer,
    textStyle: textStyleReducer,
    fontFamily: fontFamilyReducer,
    hideText: hideTextReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch