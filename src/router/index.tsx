import { createBrowserRouter } from "react-router-dom";
import NotFound404Page from "../pages/error/404";
import Layout from "../layouts";
import homeRoutes from "./routes/home";
import ourStoryRoutes from "./routes/our-story";
import brandRoutes from "./routes/brands";
import branchesRoutes from "./routes/branches";
import adminRoutes from "./routes/admin";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        children: homeRoutes,
      },
      {
        path: "our-story",
        children: ourStoryRoutes,
      },
      {
        path: "brands",
        children: brandRoutes,
      },
      {
        path: "branches",
        children: branchesRoutes,
      },
      {
        path: "admin",
        children: adminRoutes,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404Page />,
  },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

export default router;
