import { Navigate, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FloatingWhatsApp from "../../components/FloatingWhatsapp";
import store from "store";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const authorized = store.get("authorized");

  const BootstrappedLayout = () => {
    // redirect to login page if current is not login page and user not authorized
    if (!authorized && location.pathname === "/admin") {
      return <Navigate to={`/admin/login`} replace />;
    }

    // in other case render previously set layout
    return children;
  };

  return (
    <div className="min-h-lvh flex flex-col">
      <div>
        {location.pathname.includes("admin") ? (
          <>
            <div className="min-h-screen">{BootstrappedLayout()}</div>
          </>
        ) : (
          <div>
            <Header />
            <div className="min-h-screen bg-[#0A0A0A]">{children}</div>
            <FloatingWhatsApp />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
