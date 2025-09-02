import JobsPage from "../../pages/jobs";
import JobsDetailPage from "../../pages/jobs/[id]";

const jobsRoutes = [
  {
    path: "",
    element: <JobsPage />,
  },
  {
    path: ":id",
    element: <JobsDetailPage />,
  },
];

export default jobsRoutes;
