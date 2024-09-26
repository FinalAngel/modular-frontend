import React from "react";

import { Title, Section } from "components/typography";

import ProductContainer from "./container";
import Product, { Props as ProductProps } from "./product";

export interface Props {
  title: string;
  items: ProductProps[];
}

const Products = ({ title, items }: Props) => {
  return (
    <Section>
      <Title type="h2">{title}</Title>
      <ProductContainer>
        {items.map((product) => (
          <Product key={product.uuid} {...product} />
        ))}
      </ProductContainer>
    </Section>
  );
};

export default Products;

export { type Props as ProductProps } from "./product";
