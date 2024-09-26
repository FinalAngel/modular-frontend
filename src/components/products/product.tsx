import { Title } from "components/typography";

import "./product.scss";

export interface Props {
  uuid: string;
  image: string;
  title: string;
  category: "Item Category";
  price: string;
  to: string;
}

const Product = ({ image, title, category, price, to }: Props) => {
  return (
    <li className="product__item">
      <img src={image} alt="" className="product__image" />
      <Title type="h3" className="product__title">
        <a href={to} className="product__anchor">
          {title}
        </a>
      </Title>
      <p className="product__category">{category}</p>
      <p className="product__price">${price}</p>
    </li>
  );
};

export default Product;
