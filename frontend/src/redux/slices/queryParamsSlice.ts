import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IQueryParams } from '../../models/QueryParams';

const initialState: IQueryParams = {
  categoryId: 0,
  offset: 0,
  searchTerm: '',
};

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<IQueryParams>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setQueryParams } = queryParamsSlice.actions;

export const selectQueryParams = (state: RootState) => state.queryParams;

export default queryParamsSlice.reducer;
