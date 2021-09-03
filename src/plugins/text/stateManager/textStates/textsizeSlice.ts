import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

interface text_sizeState {
  value: number
}

const initialState: text_sizeState = {
  value: 1,
}

export const text_sizeSlice = createSlice({
  name: 'textsize',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 0.5
    },
    decrement: (state) => {
      state.value -= 0.5
    }
  },
})

export const textsizeSelector  = (state: RootState) => state.root.value;
export const { increment, decrement } = text_sizeSlice.actions
export default text_sizeSlice.reducer