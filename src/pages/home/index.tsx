import About from "../../components/About";
import Branches from "../../components/Branches";
import Brands from "../../components/Brands";
import Hero from "../../components/Hero";
import ImageCustom from "../../components/ImageCustom";
import NewsSection from "../../components/NewsSection";
import Services from "../../components/Services";
import Statistics from "../../components/Statistics";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <Services />
      <ImageCustom type="re" />
      <Brands />
      <Branches />
      <NewsSection />
    </>
  );
};

export default Home;
