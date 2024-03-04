import { useEffect, useState } from 'react';
import Preloader from './Preloader';
import { IProduct } from '../models/Product';
import ProductCard from './ProductCard';

const TopSales = () => {
  const [topSales, setTopSales] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL+'top-sales')
      .then(res => res.json())
      .then(jsonData => {
        setTopSales(jsonData);
      })
      .catch(err => { throw err })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      { isLoading && <Preloader /> }
      { !isLoading &&
        <section className="catalog">
          <div className="row">
            {topSales.map(({id, category, title, price, images}: IProduct) => 
                <div key={id} className="col-4">
                  <ProductCard 
                    id={id} 
                    category={category} 
                    title={title} 
                    price={price}
                    images={images} 
                  />
                </div>
              )
            }
          </div>
        </section>
      } 
    </section>
  )
};

export default TopSales;