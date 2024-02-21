import ProductImage1 from "../assets/iron.jpg";
import ProductImage2 from "../assets/cal suple.jpg";
import ProductImage3 from "../assets/zinc.jpg";

function Products() {
  return (
    <section class="Products">
      <h2 class="title">Our Products</h2>

      <div class="product-items">
        <div class="product-card">
          <img src={ProductImage1} alt="Supplements" />
          <h2>Iron Supplements</h2>
        </div>

        <div class="product-card">
          <img src={ProductImage2} alt="Supplements" />
          <h2>Calcium Citrate</h2>
        </div>

        <div class="product-card">
          <img src={ProductImage3} alt="Supplements" />
          <h2>Other Supplements</h2>
        </div>
      </div>
    </section>
  );
}

export default Products;
