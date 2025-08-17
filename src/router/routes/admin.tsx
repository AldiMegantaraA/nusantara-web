import AdminPage from "../../pages/admin";
import LoginPage from "../../pages/login";

const adminRoutes = [
  {
    path: "",
    element: <AdminPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

export default adminRoutes;
