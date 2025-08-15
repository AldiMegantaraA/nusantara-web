import AwardAndRecognition from "./components/AwardAndRecognition";
import Hero from "./components/Hero";
import Operation from "./components/Operartion";
import AnEndlessProgression from "./components/AnEndlessProgression";
import Periode2 from "./components/Periode2";
import Periode3 from "./components/Periode3";
import Periode4 from "./components/Periode4";
import Periode5 from "./components/Periode5";
import Periode6 from "./components/Periode6";
import IndonesiaMap from "./components/IndonesiaMap";
import ImageCustom from "../../../components/ImageCustom";

const Journey = () => {
  return (
    <>
      <Hero />
      <ImageCustom type="mercy" />
      <Operation />
      <AwardAndRecognition />
      <AnEndlessProgression />
      <Periode2 />
      <Periode3 />
      <Periode4 />
      <Periode5 />
      <Periode6 />
      <IndonesiaMap />
      <ImageCustom type="jeep" />
    </>
  );
};

export default Journey;
