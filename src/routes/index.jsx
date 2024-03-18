import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import ProfilePage from "../pages/ProfilePage";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Spinner from "../components/Spinner";
import Container from "../layouts/Container";
import PostPage from "../pages/PostPage";
import TripPage from "../pages/TripPage";
import TransactionPage from "../pages/TransactionPage";

const router = createBrowserRouter([
  { path: '/spinner', element: <Spinner /> },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <>
        <Container/>
        <Outlet />
      </>
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "profile/:userId",
        element: <ProfilePage />,
      },
      {
        path: "create",
        element: <PostPage/>
      },
      {
        path: "services/:id",
        element: <TripPage />,
      },
      {
        path: "transaction/id",
        element: <TransactionPage/>
      }
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
