import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { getCrops } from "../services/api";
import DashboardLayout from "../layouts/DashboardLayout";

const AppLayout = lazy(() => import("../layouts/AppLayout"));
const ProtectedRoute = lazy(() =>
  import("../components/router/ProtectedRoute")
);
const LoaderPage = lazy(() => import("../pages/LoaderPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const HomePage = lazy(() => import("../pages/HomePage"));
const AddCorpPage = lazy(() => import("../pages/AddCropPage"));
const AllCropsPage = lazy(() => import("../pages/AllCropsPage"));
const CropDetailsPage = lazy(() => import("../pages/CropDetailsPage"));
const MyCropsPage = lazy(() => import("../pages/MyCropsPages"));
const MyInterestsPage = lazy(() => import("../pages/MyInterestsPage"));

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const UpdateProfilePage = lazy(() => import("../pages/UpdateProfilePage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));

const TermsAndConditionsPage = lazy(() =>
  import("../pages/TermsAndConditionsPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    hydrateFallbackElement: <LoaderPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", index: true, element: <HomePage /> },

      {
        path: "crops",
        loader: () => getCrops(),
        element: <AllCropsPage />,
      },
      {
        path: "crops/:id",
        element: <CropDetailsPage />,
      },

      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },

      { path: "reset-password", element: <ResetPasswordPage /> },
      { path: "/terms-and-conditions", element: <TermsAndConditionsPage /> },
    ],
  },

  {
    path: "dashboard/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "add-crop",
        element: <AddCorpPage />,
      },
      {
        path: "my-crops",
        element: <MyCropsPage />,
      },
      {
        path: "my-interests",
        element: <MyInterestsPage />,
      },

      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "update-profile",
        element: <UpdateProfilePage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
