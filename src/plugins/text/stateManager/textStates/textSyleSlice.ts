import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

interface textStyle {
  bold: boolean
  italic: boolean
  underline: boolean

}

const initialState: textStyle = {
  bold: false,
  italic: false,
  underline: false,
}


export const textStyleSlice = createSlice({
  name: 'textStyle',
  initialState,
  reducers: {
    boldToggle : (state) => {
      state.bold = !state.bold
    },
    italicToggle: (state) => {
      state.italic = !state.italic
    },
    underlineToggle : (state) => {
      state.underline = !state.underline
    },

  },
})

export const textBoldBoolean  = (state: RootState) => state.textStyle.bold;
export const textItalicBoolean  = (state: RootState) => state.textStyle.italic;
export const textUnderLineBoolean  = (state: RootState) => state.textStyle.underline;
export const { boldToggle, italicToggle, underlineToggle } = textStyleSlice.actions
export default textStyleSlice.reducer