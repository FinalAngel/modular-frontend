import type { Preview } from "@storybook/react";
import "../src/index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms", "Templates", "Pages"],
      },
    },
  },
};

export default preview;
