import "./App.css";
import "./AppMobile.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HealthCareServiceDelivery from "./components/HealthCareServiceDelivery";
import Products from "./components/Products";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <About />
      <HealthCareServiceDelivery />
      <Services />
      <Products />
      <Team />
      <Footer />
    </>
  );
}

export default App;
