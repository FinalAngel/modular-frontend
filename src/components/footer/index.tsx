import React from "react";

import QuickLinks from "components/quick-links";
import Teaser from "components/teaser";

import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__grid footer__grid--alpha">
        <QuickLinks items={["Home", "Events", "Support", "Contact"]} />
      </div>

      <div className="footer__grid">
        <Teaser title="Announcements / Promoted Content">
          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            quis gravida magna mi a libero. Suspendisse enim turpis, dictum sed,
            iaculis a, condimentum nec, nisi. Praesent egestas tristique nibh.
            Vestibulum suscipit nulla quis orci. Nunc nonummy metus.
          </p>
        </Teaser>
      </div>

      <div className="footer__grid footer__grid--omega">
        <Teaser title="Coming Soon">
          <img src="https://dummyimage.com/150x60/ffffff/999999.jpg" alt="" />
        </Teaser>
      </div>
    </footer>
  );
};

export default Footer;
