import { Link } from 'react-router-dom';
import { IProduct } from '../models/Product';

const ProductCard = ({ id, title, price, images }: IProduct) => {
  const [src] = images;
  return (
    <div className="card catalog-item-card">
      <img src={src} className="card-img-top img-fluid" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{price.toLocaleString('ru-RU')} руб.</p>
        <Link to={`/products/${id}.html`} className="btn btn-outline-primary">
          Заказать
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
