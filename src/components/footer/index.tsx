import React from "react";

import QuickLinks from "components/quick-links";
import Teaser from "components/teaser";

import { Text } from "components/typography";
import { Grid, GridItem } from "components/grid";

import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Grid>
        <GridItem alpha>
          <QuickLinks items={["Home", "Events", "Support", "Contact"]} />
        </GridItem>

        <GridItem>
          <Teaser title="Announcements / Promoted Content">
            <Text>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Suspendisse enim turpis, dictum
              sed, iaculis a, condimentum nec, nisi. Praesent egestas tristique
              nibh. Vestibulum suscipit nulla quis orci. Nunc nonummy metus.
            </Text>
          </Teaser>
        </GridItem>

        <GridItem omega>
          <Teaser title="Coming Soon">
            <img
              src="https://dummyimage.com/150x60/ffffff/999999.jpg"
              alt=""
              className="footer__logo"
            />
          </Teaser>
        </GridItem>
      </Grid>
    </footer>
  );
};

export default Footer;
