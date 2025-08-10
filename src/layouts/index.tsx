import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import MainLayout from "./Main/MainLayout";

const Layouts = {
  main: MainLayout,
};

const Layout: React.FC = () => {
  // Layout Rendering
  const location = useLocation();
  const pathname = location.pathname;
  let previousPath = "";

  if (pathname !== previousPath) {
    window.scrollTo(0, 0);
    NProgress.start();
  }
  setTimeout(() => {
    NProgress.done();
    previousPath = pathname;
  }, 300);

  const Container = Layouts["main"];

  const BootstrappedLayout = () => {
    // in other case render previously set layout
    return (
      <Container>
        <Outlet />
      </Container>
    );
  };

  return <>{BootstrappedLayout()}</>;
};

export default Layout;
