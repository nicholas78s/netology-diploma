import { useAppDispatch } from '../redux/hooks.ts';
import { addPage } from '../redux/slices/pagesSlice.ts';

interface IProductsMoreProps {
  disabled: boolean;
}

const ProductsMore = ({ disabled }: IProductsMoreProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch(addPage())}
        disabled={disabled}
      >
        Загрузить ещё
      </button>
    </div>
  );
};

export default ProductsMore;
