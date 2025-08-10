import Footer from "../../components/Footer";
import Header from "../../components/Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-lvh flex flex-col">
      <div>
        <Header />
        <div className="min-h-screen bg-gray-900">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
