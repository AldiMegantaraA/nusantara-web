import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FloatingWhatsApp from "../../components/FloatingWhatsapp";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  return (
    <div className="min-h-lvh flex flex-col">
      <div>
        {
          location.pathname === '/admin' ?
          <>
          <div className="min-h-screen bg-[#0A0A0A]">{children}</div>
          </>
          :
          <>
          <Header />
          <div className="min-h-screen bg-[#0A0A0A]">{children}</div>
          <FloatingWhatsApp/>
          <Footer />
          </>
        }
      </div>
    </div>
  );
};

export default MainLayout;
