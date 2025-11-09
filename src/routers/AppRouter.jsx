import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "", index: true, element: <HomePage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
