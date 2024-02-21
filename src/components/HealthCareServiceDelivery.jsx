import HealthCareServiceDeliveryImage from "../assets/healthcare service delivery.webp";

function HealthCareServiceDelivery() {
  return (
    <section class="new-item">
      <div class="new-item-text">
        <h2>Healthcare Service Delivery</h2>

        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptates, nesciunt earum laboriosam quibusdam laborum iure nisi,
            optio rem corporis doloribus. Iusto illum blanditiis reprehenderit
            odit sit consequatur labore earum.
          </p>
        </div>

        <div>
          <button type="submit" class="btn">
            Click here
          </button>
        </div>
      </div>

      <div class="img">
        <img src={HealthCareServiceDeliveryImage} alt="health" srcset="" />
      </div>
    </section>
  );
}

export default HealthCareServiceDelivery;
