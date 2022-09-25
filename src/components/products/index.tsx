import React from "react";

import { Title, Section } from "components/typography";

import ProductContainer from "./container";
import Product, { Props as ProductProps } from "./product";

interface Props {
  title: string;
  items: ProductProps[];
}

const Products: React.FC<Props> = ({ title, items }) => {
  return (
    <Section>
      <Title type="h2">{title}</Title>
      <ProductContainer>
        {items.map((product, index) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductContainer>
    </Section>
  );
};

export default Products;

export { Props as ProductProps } from "./product";
