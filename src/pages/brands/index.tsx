import Hero from "./components/Hero";
import ImageCustom from "../../components/ImageCustom";
import BrandDescription from "./components/BrandDescription";
import Honda from "../../assets/img/honda-desc.jpg";
import RoyalEnfield from "../../assets/img/re-desc.jpg";
import Hyundai from "../../assets/img/hyundai-desc.jpg";
import Scomadi from "../../assets/img/scomadi-desc.jpg";
import Ford from "../../assets/img/ford-desc.jpg";
import Chevrolet from "../../assets/img/chevrolet-desc.jpg";

const brands = [
  {
    src: Honda,
    title: "Honda",
    desc: "In the 1960s motorization was on the rise in Japan. Honda was building a framework to enter the automobile market, and in 1963 it launched its first k-truck, the T360. This marked Honda’s start as an auto manufacturer. Honda is best known for producing reliable, fuel-efficient, and well-engineered vehicles. Models like the Civic, Accord, and CR-V have become global bestsellers, praised for their durability, safety, and practicality. Honda’s philosophy, “The Power of Dreams,” reflects its focus on innovation, quality, and customer satisfaction. With manufacturing plants around the world, Honda remains a trusted global brand known for blending everyday usability with forward-thinking engineering.",
  },
  {
    src: RoyalEnfield,
    title: "Royal Enfield",
    desc: "Royal Enfield, originally a British brand founded in 1901 and now owned by India’s Eicher Motors, is one of the world’s oldest continuously produced motorcycle manufacturers. They are best known for their classic, retro-styled motorcycles that blend timeless design with modern engineering. Iconic models like the Bullet, Classic, and Himalayan have earned a loyal following for their distinctive thumping engine sound, rugged build, and easy customizability. Royal Enfield is especially popular for long-distance touring and adventure riding, with a strong presence in Asia and growing appeal globally. The brand symbolizes heritage, simplicity, and the spirit of pure motorcycling.",
  },
  {
    src: Hyundai,
    title: "Hyundai",
    desc: "Hyundai Motor Company, founded in 1967 in South Korea, is one of the world’s largest automobile manufacturers. Known for producing affordable, reliable, and well-equipped vehicles, Hyundai has earned global recognition for value and quality. Popular models like the Elantra, Tucson, and Santa Fe combine stylish design with advanced safety and technology features. The brand is also notable for its industry-leading warranty programs. In recent years, Hyundai has invested heavily in innovation, and is a leader in electric vehicles, such as the IONIQ range. Hyundai stands for modern design, efficiency, and accessible technology for drivers worldwide.",
  },
  {
    src: Scomadi,
    title: "Scomadi",
    desc: "Scomadi is a British scooter brand founded in 2005, by Frank Sanderson and Paul Melici, known for blending classic Italian scooter styling with modern engineering. Inspired by the iconic Lambretta designs of the 1960s, Scomadi produces retro-styled scooters that appeal to enthusiasts seeking vintage looks with contemporary performance and reliability. Popular models like the Turismo Leggera and Turismo Technica feature sleek lines, chrome detailing, and modern conveniences such as efficient engines, improved suspension, and advanced braking systems. Scomadi is recognized for its craftsmanship, limited-edition colour options, and “built to order” philosophy, making each scooter unique. The brand embodies style, individuality, and the spirit of classic scootering.",
  },
  // {
  //   src: Jeep,
  //   title: "Jeep",
  //   desc: "Jeep, the American automobile brand founded in 1941, is best known for its rugged, off-road-capable vehicles. Originally developed for military use during World War II, the Willys MB became the blueprint for civilian Jeeps after the war. Jeep’s signature features include the seven-slot grille, boxy design, and exceptional 4x4 capability. Models like the Wrangler, Cherokee, and Grand Cherokee are popular for their durability, versatility, and adventure-ready performance. The brand has a strong heritage in outdoor exploration and overlanding, symbolizing freedom and capability. Jeep is widely recognized as a pioneer in the SUV segment, blending off-road toughness with everyday usability.",
  // },
  // {
  //   src: Mercy,
  //   title: "Mercedes-Benz",
  //   desc: "Mercedes-Benz, founded in 1926 in Stuttgart, Germany, is a world-leading luxury automobile manufacturer known for combining elegance, performance, and innovation. The brand’s origins trace back to Karl Benz’s 1886 invention of the first gasoline-powered car, the Benz Patent-Motorwagen. Mercedes-Benz is renowned for its premium sedans, SUVs, coupes, and sports cars, with models like the S-Class, E-Class, and G-Class symbolizing prestige and engineering excellence. They are pioneers in automotive safety, comfort, and technology, introducing innovations like ABS, airbags, and advanced driver-assistance systems. The brand’s slogan, “The Best or Nothing,” reflects its commitment to craftsmanship, luxury, and cutting-edge performance for discerning drivers worldwide.",
  // },
  {
    src: Ford,
    title: "Ford",
    desc: "Ford Motor Company, founded in 1903 by Henry Ford in the United States, is one of the most influential automobile manufacturers in history. It revolutionized the industry by introducing the moving assembly line, making cars affordable for the masses with the iconic Model T. Today, Ford is known for producing durable, versatile vehicles, including pick-up trucks, SUVs, and performance cars such as the Mustang. Ford’s heritage blends American toughness with forward-thinking technology, earning it a reputation for reliability, capability, and driving enjoyment worldwide.",
  },
  {
    src: Chevrolet,
    title: "Chevrolet",
    desc: "Chevrolet, founded in 1911 by Louis Chevrolet and William C. Durant, is a core brand of General Motors and one of America’s most recognized automakers. Known for offering a wide range of vehicles, Chevrolet builds everything from affordable compact cars to powerful trucks and sports cars. The brand is also strong in SUVs and family vehicles, combining practicality with innovation. Globally, Chevrolet stands for American automotive heritage, value, and versatility, with a legacy of producing vehicles that cater to everyday needs while delivering driving excitement.",
  },
];

const Journey = () => {
  return (
    <>
      <Hero />
      <div className="mt-16 lg:mt-32">
        {brands?.map((item, i) => (
          <BrandDescription
            i={i}
            src={item.src}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <ImageCustom type="jeep" />
    </>
  );
};

export default Journey;
