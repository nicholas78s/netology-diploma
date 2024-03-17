import Preloader from './Preloader';
import ProductCards from './ProductCards';
import ErrorMessage from './ErrorMessage';
import { useGetTopSalesQuery } from '../redux/services/api';

const TopSales = () => {
  const {
    data: topSales = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetTopSalesQuery();

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isError && <ErrorMessage error={error} reload={refetch} />}
      {!isError && (isLoading || isFetching) && <Preloader />}
      {!isError && !isLoading && !isFetching && topSales.length && (
        <section className="catalog">
          <ProductCards products={topSales} />
        </section>
      )}
    </section>
  );
};

export default TopSales;
