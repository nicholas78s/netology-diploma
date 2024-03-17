import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../models/Product';
import { ICategory } from '../../models/Category';
import { IQueryParams } from '../../models/QueryParams';
import { setLoadButton } from '../slices/loadButtonSlice';
import { setPageLoaded, setPageNotLoaded } from '../slices/pagesSlice.ts';
import { IPage } from '../../models/Page.ts';
import { RootState } from '../store.ts';
import config from '../../config.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  tagTypes: ['Products', 'Categories'],
  keepUnusedDataFor: 1, // min caching
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], IQueryParams>({
      query: ({ categoryId, offset, searchTerm }: IQueryParams) => {
        const endpoint = [
          'items',
          categoryId ? `&categoryId=${categoryId}` : '',
          offset ? `&offset=${offset}` : '',
          searchTerm ? `&q=${searchTerm}` : '',
        ]
          .join('')
          .replace('items&', 'items?');

        return endpoint;
      },
      providesTags: ['Products'],
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        let isVisible = true;
        dispatch(setLoadButton({ isVisible, isDisabled: true }));
        const currentPage = (getState() as RootState).pages.find(
          (page: IPage) => page.offset === arg.offset
        );

        try {
          const { data } = await queryFulfilled;
          isVisible = (data.length >= config.productsPageSize);

          if (currentPage) {
            dispatch(
              setPageLoaded({
                offset: currentPage.offset,
                itemsCount: data.length,
              })
            );
          }
        } catch (err) {
          if (currentPage) {
            dispatch(setPageNotLoaded(currentPage.offset));
          }
        } finally {
          dispatch(setLoadButton({ isVisible, isDisabled: false }));
        }
      },
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id?: string) => `items/${id}`,
    }),
    getTopSales: builder.query<IProduct[], void>({
      query: () => 'top-sales',
    }),
    getCategories: builder.query<ICategory[], void>({
      query: () => 'categories',
      providesTags: ['Categories'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetTopSalesQuery,
  useGetCategoriesQuery,
} = api;
