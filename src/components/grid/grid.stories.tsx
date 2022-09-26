import React from "react";

import { Grid, GridItem } from "./";

export default {
  title: "Molecules/Grid",
  component: Grid,
};

export const Standard = () => (
  <Grid>
    <GridItem>Left column</GridItem>
    <GridItem>Just a column</GridItem>
    <GridItem>Just a column</GridItem>
    <GridItem>Right column</GridItem>
  </Grid>
);

export const AlphaAndOmega = () => (
  <Grid>
    <GridItem alpha>Left column</GridItem>
    <GridItem>Center column</GridItem>
    <GridItem omega>Right column</GridItem>
  </Grid>
);
