import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getQueryParamsString } from '../models/QueryParams';
import {
  selectQueryParams,
  setQueryParams,
} from '../redux/slices/queryParamsSlice';

const SearchProducts = () => {
  const [urlSearchParams] = useSearchParams();
  const { categoryId, offset, searchTerm } = useAppSelector(selectQueryParams);

  const [search, setSearch] = useState(() => {
    const urlSearchParam = urlSearchParams.get('q');
    return urlSearchParam || searchTerm || '';
  });

  const location = useLocation();

  useEffect(() => {
    const searchParam = urlSearchParams.get('q') || '';
    setSearch(searchParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(
      '/catalog.html' +
        getQueryParamsString({ categoryId, offset, searchTerm: search })
    );
    dispatch(setQueryParams({ searchTerm: search }));
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={submitHandler}>
      <input
        className="form-control"
        placeholder="Поиск"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchProducts;
