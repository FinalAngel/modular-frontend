import Products, { Props, ProductProps } from "./";

export default {
  title: "Organisms/Products",
  component: Products,
};

const productFixture: ProductProps[] = Array.from({ length: 4 }, (index) => ({
  uuid: `produt-${index}`,
  title: "Item Title",
  image: "https://dummyimage.com/300x300/cccccc/999999.jpg",
  category: "Item Category",
  price: "88.00",
  to: `/product/${index}/`,
}));

export const Standard = (args: Props) => <Products {...args} />;
Standard.args = {
  title: "Products",
  items: productFixture,
};
