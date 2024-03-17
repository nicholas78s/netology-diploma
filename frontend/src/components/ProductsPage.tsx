import Preloader from './Preloader';
import ProductCards from './ProductCards';
import ErrorMessage from './ErrorMessage';
import { useAppSelector } from '../redux/hooks.ts';
import { useGetProductsQuery } from '../redux/services/api';
import { selectQueryParams } from '../redux/slices/queryParamsSlice';

interface IProductPageProps {
  offset: number;
}

const ProductsPage = ({ offset }: IProductPageProps) => {
  const { categoryId, searchTerm } = useAppSelector(selectQueryParams);
  const {
    data: products = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetProductsQuery({ categoryId, offset, searchTerm });

  return (
    <>
      {isError && <ErrorMessage error={error} />}
      {!isError && (isLoading || isFetching) && <Preloader />}
      {!isError && !isLoading && !isFetching && products.length > 0 && (
        <ProductCards products={products} />
      )}
    </>
  );
};

export default ProductsPage;
