// import { useNavigate } from "react-router-dom";
// import ROUTE_PATHNAME from "../../../router/routes.constants";
import Nusantara from "../../../assets/img/nusantara-logo-footer.svg";
import NotFound404 from "../../../assets/img/auth-404.svg";

const NotFound404Page = () => {
  // const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center w-2/5">
        <img className="m-auto w-64 mb-12" src={Nusantara} />
        <img className="m-auto w-64 mb-8" src={NotFound404} />
        <p className="font-bold text-[36px] leading-[43.2px] mt-6">404</p>
        <p className="font-bold text-[36px] leading-[43.2px] mb-2">
          Page Not Found
        </p>
        <p className="leading-6 text-[#5F7174] tracking-wide max-w-[480px] mx-auto">
          We could not find the page you are looking for. Please check if the
          URL is correct or contact us for help.
        </p>
        {/* <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-y-3 sm:gap-y-0 sm:grid-cols-2 justify-center my-6 gap-x-6 mx-auto">
            <Button
              className="h-9 col-span-1 md:w-[150px] lg:w-[200px] xl:w-[250px]"
              size="large"
              onClick={() => navigate(`/${ROUTE_PATHNAME.DASHBOARD}`)}
            >
              Back
            </Button>
            <Button
              className="bg-primary text-white h-9 col-span-1 md:w-[150px] lg:w-[200px] xl:w-[250px]"
              size="large"
            >
              Contact Us
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NotFound404Page;
