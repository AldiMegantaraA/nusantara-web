import About from "../../components/About";
import Branches from "../../components/Branches";
import Brands from "../../components/Brands";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Statistics from "../../components/Statistics";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Brands />
      <Branches />
    </div>
  );
};

export default Home;
