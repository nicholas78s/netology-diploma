import { IProduct } from '../models/Product';
import ProductCard from './ProductCard';

interface IProductCardsProps {
  products: IProduct[];
}

const ProductCards = ({ products }: IProductCardsProps) => {
  return (
    <div className="row">
      {products.map(({ id, category, title, price, images }: IProduct) => (
        <div key={id} className="col-4">
          <ProductCard
            id={id}
            title={title}
            price={price}
            images={images}
            category={category}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
