import type { StoryObj } from "@storybook/react";
import Products, { ProductProps } from "./";

export default {
  title: "Organisms/Products",
  component: Products,
};

const createProductFixtures = (
  length: number,
  images: boolean
): ProductProps[] => {
  return Array.from({ length }, (index) => ({
    uuid: `produt-${index}`,
    title: "Item Title",
    ...(images && { image: "https://via.placeholder.com/150" }),
    category: "Item Category",
    price: "88.00",
    to: `/product/${index}/`,
  }));
};

export const Standard: StoryObj<typeof Products> = {
  render: (args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { itemLength, showVisuals } = args as any;

    return (
      <Products
        {...args}
        items={createProductFixtures(itemLength, showVisuals)}
      />
    );
  },
  args: {
    title: "Products",
    itemLength: 4,
    showVisuals: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};
