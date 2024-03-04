import { Link } from "react-router-dom";
import { ICategory } from "../models/Category";

const Category = ({id, title}: ICategory) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={'#'}>{title}</Link>
    </li>
  )
};

export default Category;