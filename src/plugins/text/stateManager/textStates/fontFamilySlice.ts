import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

interface fontFamily{
	currentFontFamily: string;
}

const initialState: fontFamily = {
	currentFontFamily: "" 
 }

 export const fontFamilySlice = createSlice({
  name: 'fontFamily',
  initialState,
  reducers: {
    fontFamilyChange: (state, action) => {
      state.currentFontFamily= action.payload;
    }

  },
})
 export const currentFontFamily  = (state: RootState) => state.fontFamily.currentFontFamily;
 export const {fontFamilyChange} = fontFamilySlice.actions;
 export default fontFamilySlice.reducer;