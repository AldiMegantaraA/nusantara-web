import NusantaraLogo from "../../../assets/img/nusantara-logo-background.png";

const Journey = () => {
  return (
    <div className="bg-[#711917] p-16 h-screen flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <img
          src={NusantaraLogo}
          alt="Nusantara Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-3/4">
        <h1 className="text-6xl font-bold text-white mt-[33px]">
          Established in 1975, Nusantara Group is one of the leading automotive
          dealerships in Indonesia.
        </h1>
      </div>
      <div className="w-1/2">
        <p className="text-[28px] font-medium text-white">
          From world-renowned brands to trusted service, Nusantara Group is your
          partner in mobility across Indonesia.
        </p>
      </div>
    </div>
  );
};

export default Journey;
