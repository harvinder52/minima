import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

interface textColor{
	currentTextColor: string;
}

const initialState: textColor = {
	currentTextColor: "" 
 }

 export const textColorSlice = createSlice({
  name: 'textColor',
  initialState,
  reducers: {
    textColorChange: (state, action) => {
      state.currentTextColor= action.payload;
    }

  },
})
 export const currentTextColor  = (state: RootState) => state.textColor.currentTextColor;
 export const {textColorChange} = textColorSlice.actions;
 export default textColorSlice.reducer;