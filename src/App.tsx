import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Branches from "./components/Branches";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Brands />
      <Branches />
      <Footer />
    </div>
  );
}

export default App;
