import { configureStore } from '@reduxjs/toolkit';
import textsize from './textStates/textsizeSlice'

export const store = configureStore({
  reducer: {
    root: textsize
  },
})



export default store
export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch