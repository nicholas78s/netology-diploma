import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { IProduct } from "../models/Product";
import ProductCard from "./ProductCard";
import Categories from "./Categories";
import ProductsMore from "./ProductsMore";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL+'items')
      .then(res => res.json())
      .then(jsonData => {
        setProducts(jsonData);
      })
      .catch(err => { throw err })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      { isLoading && <Preloader /> }
      { !isLoading && <>
          <Categories />
          <div className="row">
            {products.map(({id, category, title, price, images}: IProduct) => 
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
          <ProductsMore />
        </>
      }
    </section>
  )
};

export default Products;