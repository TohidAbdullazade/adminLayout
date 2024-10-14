import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layout/adminLayout";
import Admin from "./pages/admin";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ element: <Admin />, index: true }],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
