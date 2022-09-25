import React from "react";

import Teaser, { Props } from "./";

export default {
  title: "Molecules/Teaser",
  component: Teaser,
};

export const Standard = (args: Props) => (
  <Teaser {...args}>
    <p>
      Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
      gravida magna mi a libero. Suspendisse enim turpis, dictum sed, iaculis a,
      condimentum nec, nisi. Praesent egestas tristique nibh. Vestibulum
      suscipit nulla quis orci. Nunc nonummy metus.
    </p>
  </Teaser>
);
