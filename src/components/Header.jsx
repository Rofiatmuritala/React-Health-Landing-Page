function Header() {
  return (
    <header class="bg">
      <div class="items">
        <div class="top-items">
          <div class="home">
            <h2 class="logo">
              <a href="Index.html">Anaelink</a>
            </h2>
          </div>
          <nav>
            <ul>
              <li>
                <a class="current" href="Index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="About Us.html">About Us</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="product.html">Product</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div>
            <button type="submit" class="btn">
              SIGN UP
            </button>
          </div>
        </div>

        <div class="header-text">
          <h1>GIVE YOUR HEALTH A HUG</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            adipisci dolore ratione dolores. Sit facilis veniam sequi, earum
            possimus quasi error enim dignissimos incidunt corrupti!
          </p>

          <a href="#">Learn More</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
