import React from "react";

import Container from "components/container";
import Copyright from "components/copyright";
import Headline from "components/headline";
import Products, { ProductProps } from "components/products";
import { HeaderLayout } from "components/layout";
import { FooterLayout } from "components/layout";
import { Title, Text } from "components/typography";

const products: ProductProps[] = Array.from({ length: 4 }, (index) => ({
  id: `produt-${index}`,
  title: "Item Title",
  image: "https://dummyimage.com/300x300/cccccc/999999.jpg",
  category: "Item Category",
  price: "88.00",
}));

const App: React.FC = () => {
  return (
    <Container>
      <HeaderLayout />
      <Headline image="https://dummyimage.com/1024x300/cccccc/999999.jpg">
        <Title type="h2">Intro Copy Headline</Title>
        <Text>
          Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam
          vitae tortor.
        </Text>
      </Headline>
      <Products title="Products" items={products} />
      <FooterLayout />
      <Copyright />
    </Container>
  );
};

export default App;
