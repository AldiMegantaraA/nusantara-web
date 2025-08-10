import { createBrowserRouter } from "react-router-dom";
import NotFound404Page from "../pages/error/404";
import Layout from "../layouts";
import homeRoutes from "./routes/home";
import ourStoryRoutes from "./routes/our-story";

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
