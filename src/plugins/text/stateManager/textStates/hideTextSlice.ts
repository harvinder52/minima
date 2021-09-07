import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store"

interface hideText{
	value: string
}

const initialState: hideText = {
	value: ""
}

export const hideTextSlice = createSlice({
	name: 'hideText',
	initialState,
	reducers:{
		hideToggle: (state, action) => {
			state.value = action.payload;
		}
	}
})

export const hideTextValue  = (state: RootState) => state.hideText.value;
export const {hideToggle} = hideTextSlice.actions;
export  default hideTextSlice.reducer;