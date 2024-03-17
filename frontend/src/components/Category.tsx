import { Link } from 'react-router-dom';
import { ICategory } from '../models/Category';
import { useAppSelector, useAppDispatch } from '../redux/hooks.ts';
import { resetPages } from '../redux/slices/pagesSlice.ts';
import { getQueryParamsString } from '../models/QueryParams.ts';
import {
  selectQueryParams,
  setQueryParams,
} from '../redux/slices/queryParamsSlice.ts';

const Category = ({ id, title }: ICategory) => {
  const { categoryId, searchTerm } = useAppSelector(selectQueryParams);
  const dispatch = useAppDispatch();
  const className = ['nav-link', id === categoryId ? 'active' : ''].join(' ');

  return (
    <li className="nav-item">
      <Link
        className={className}
        to={getQueryParamsString({ categoryId: id, offset: 0, searchTerm })}
        onClick={() => {
          dispatch(setQueryParams({ categoryId: id, offset: 0, searchTerm }));
          dispatch(resetPages());
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default Category;
