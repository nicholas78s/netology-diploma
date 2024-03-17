import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface ILoadButtonState {
  isVisible: boolean;
  isDisabled: boolean;
}

const initialState: ILoadButtonState = {
  isVisible: true,
  isDisabled: false,
};

export const loadButtonSlice = createSlice({
  name: 'loadButton',
  initialState,
  reducers: {
    setLoadButton: (state, action: PayloadAction<ILoadButtonState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLoadButton } = loadButtonSlice.actions;

export const selectLoadButton = (state: RootState) => state.loadButton;

export default loadButtonSlice.reducer;
