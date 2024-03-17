import Categories from './Categories';
import ProductsPage from './ProductsPage';
import ProductsMore from './ProductsMore';
import SearchProducts from './SearchProducts';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectLoadButton } from '../redux/slices/loadButtonSlice';
import { selectPages } from '../redux/slices/pagesSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  selectQueryParams,
  setQueryParams,
} from '../redux/slices/queryParamsSlice';

interface IProductsProps {
  showSearch?: boolean;
}
const Products = ({showSearch}: IProductsProps) => {
  const { isVisible: isLoadButtonVisible, isDisabled: isLoadButtonDisabled } =
    useAppSelector(selectLoadButton);
  const pages = useAppSelector(selectPages);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { categoryId, offset, searchTerm } = useAppSelector(selectQueryParams);

  useEffect(() => {
    const queryParam = { categoryId, offset, searchTerm };
    const categoryParam = parseInt(searchParams.get('category') || '0');
    const searchParam = searchParams.get('q') || '';

    let isNeedUpdate = false;

    if (categoryParam >= 0 && categoryParam != categoryId) {
      queryParam.categoryId = categoryParam;
      isNeedUpdate = true;
    }

    if (searchParam != '') {
      queryParam.searchTerm = searchParam;
      isNeedUpdate = true;
    }

    if (isNeedUpdate) {
      dispatch(setQueryParams(queryParam));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        { showSearch && <SearchProducts /> }
        <Categories />
        {pages.map(({ id, offset }) => (
          <ProductsPage key={id} offset={offset} />
        ))}
        {isLoadButtonVisible && (
          <ProductsMore disabled={isLoadButtonDisabled} />
        )}
      </section>
    </>
  );
};

export default Products;
