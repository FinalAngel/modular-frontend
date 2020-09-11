import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";

const App = () => {
  return (
    <>
      <header class="header">
        <ul class="meta">
          <li class="meta-item">
            12 items in <a href="#">Cart</a>
          </li>
          <li class="meta-item">
            <a href="#">My Account</a>
          </li>
          <li class="meta-item">
            <form class="meta-form" method="post">
              <input type="search" /> <input type="submit" value="Search" />
            </form>
          </li>
        </ul>

        <h1 class="logo">A Big Title</h1>

        <nav class="navigation">
          <h2 hidden>Navigation</h2>
          <ul class="nav">
            <li class="nav-item">
              <a href="#">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">Event</a>
            </li>
            <li class="nav-item">
              <a href="#">Accessoires</a>
            </li>
            <li class="nav-item">
              <a href="#">Apparel</a>
            </li>
            <li class="nav-item">
              <a href="#">Feautred Items</a>
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

      <p className="copyright">&copy; 2020 Demo Site</p>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
