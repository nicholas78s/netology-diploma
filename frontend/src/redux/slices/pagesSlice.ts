import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IPage } from '../../models/Page.ts';
import config from '../../config.ts';

const initialState: IPage[] = [
  {
    id: 0,
    offset: 0,
    isLoaded: false,
  },
];

interface IPageLoaded {
  offset: number;
  itemsCount: number;
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addPage: (state) => {
      let newOffset = 0;
      let newId = 0;
      if (state && state.length > 0) {
        newId = state[state.length - 1].id + 1;
        newOffset = state[state.length - 1].offset + config.productsPageSize;
      }

      // если есть страницы с ошибками, то обновить их
      if (state.find((page) => page.isLoaded === false)) {
        return state.map(({ id, offset, isLoaded }) =>
          isLoaded === false
            ? { id: newId, offset, isLoaded }
            : { id, offset, isLoaded }
        );
      }

      // добавить новую страницу
      const newState = [
        ...state,
        { id: newId, offset: newOffset, isLoaded: false },
      ];
      return newState;
    },
    setPageLoaded: (state, action: PayloadAction<IPageLoaded>) => {
      return state.map(({ id, offset, isLoaded }) =>
        offset === action.payload.offset
          ? {
              id,
              offset,
              isLoaded: true,
              itemsCount: action.payload.itemsCount,
            }
          : { id, offset, isLoaded }
      );
    },
    setPageNotLoaded: (state, action: PayloadAction<number>) => {
      return state.map(({ id, offset, isLoaded, itemsCount }) =>
        offset === action.payload
          ? { id, offset, isLoaded: false }
          : { id, offset, isLoaded, itemsCount }
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetPages: (_state) => {
      return initialState;
    },
  },
});

export const { addPage, setPageLoaded, setPageNotLoaded, resetPages } =
  pagesSlice.actions;

export const selectPages = (state: RootState) => state.pages;

export default pagesSlice.reducer;
