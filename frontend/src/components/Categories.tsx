import Preloader from './Preloader';
import { ICategory } from '../models/Category';
import Category from './Category';
import { useGetCategoriesQuery } from '../redux/services/api';
import ErrorMessage from './ErrorMessage.tsx';

const Categories = () => {
  const {
    data: categories = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetCategoriesQuery();

  if (isError) {
    return <ErrorMessage error={error} reload={refetch} />;
  }

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories && categories.length > 0 ? (
        <Category key={0} id={0} title="Все" />
      ) : null}
      {categories.map(({ id, title }: ICategory) => (
        <Category key={id} id={id} title={title} />
      ))}
    </ul>
  );
};

export default Categories;
