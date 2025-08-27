import NewsPage from "../../pages/news";
import NewsDetailPage from "../../pages/news/[id]";

const newsRoutes = [
  {
    path: "",
    element: <NewsPage />,
  },
  {
    path: ":id",
    element: <NewsDetailPage />,
  },
];

export default newsRoutes;
