import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { ICategory } from "../models/Category";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(import.meta.env.VITE_API_URL + 'categories')
      .then(res => res.json())
      .then(jsonData => {
        const arr = [{id: 0, title: 'Все'}, ...jsonData];
        setCategories(arr);
      })
      .catch(err => { throw err })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading &&
        <ul className="catalog-categories nav justify-content-center">
          {categories.map(({id, title}: ICategory) => <Category key={id} id={id} title={title} />)}
        </ul>
      }
    </>
  )
};

export default Categories;