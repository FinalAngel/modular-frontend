import React from "react";
import ReactDOM from "react-dom";

import { Container, Copyright } from "./components/common";
import Logo from "./components/logo";

// example using sass-loader
import "./reset.scss";
import "./styles.scss";

const App = () => {
  return (
    <Container>
      <header className="header">
        <ul className="meta">
          <li>
            12 items in <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <form method="post">
              <input type="search" /> <input type="submit" value="Search" />
            </form>
          </li>
        </ul>

        <Logo />

        <nav className="navigation">
          <h2 hidden>Navigation</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">Accessoires</a>
            </li>
            <li>
              <a href="#">Apparel</a>
            </li>
            <li>
              <a href="#">Featured Items</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <img src="https://dummyimage.com/1024x300/cccccc/999999.jpg" alt="" />
        <h2>Intro Copy Headline</h2>
        <p>
          Fusce vel dui. In enim justo, rhoncus ut, imperdiet a, venenatis
          vitae, justo. Pellentesque commodo eros a enim. Fusce a quam. Etiam
          vitae tortor.
        </p>
      </section>

      <section>
        <h2>Products</h2>
        <ul className="products">
          <li>
            <img
              src="https://dummyimage.com/300x300/cccccc/999999.jpg"
              alt=""
            />
            <h3>
              <a href="#">Item Title</a>
            </h3>
            <p>Item Category</p>
            <p>$88.00</p>
          </li>
          <li>
            <img
              src="https://dummyimage.com/300x300/cccccc/999999.jpg"
              alt=""
            />
            <h3>
              <a href="#">Item Title</a>
            </h3>
            <p>Item Category</p>
            <p>$88.00</p>
          </li>
          <li>
            <img
              src="https://dummyimage.com/300x300/cccccc/999999.jpg"
              alt=""
            />
            <h3>
              <a href="#">Item Title</a>
            </h3>
            <p>Item Category</p>
            <p>$88.00</p>
          </li>
          <li>
            <img
              src="https://dummyimage.com/300x300/cccccc/999999.jpg"
              alt=""
            />
            <h3>
              <a href="#">Item Title</a>
            </h3>
            <p>Item Category</p>
            <p>$88.00</p>
          </li>
        </ul>
      </section>

      <footer>
        <h2 hidden>Footer</h2>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Announcements / Promoted Content</h3>
          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            quis gravida magna mi a libero. Suspendisse enim turpis, dictum sed,
            iaculis a, condimentum nec, nisi. Praesent egestas tristique nibh.
            Vestibulum suscipit nulla quis orci. Nunc nonummy metus.
          </p>
        </div>
        <div>
          <h3>Coming Soon</h3>
          <img src="https://dummyimage.com/150x60/ffffff/999999.jpg" alt="" />
        </div>
      </footer>

      <Copyright />
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
