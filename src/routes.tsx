import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layout/admin/adminLayout";
import Admin from "./pages/admin/admin";
import Login from "./pages/auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [{ element: <Admin />, index: true }],
  },
  { path: "login", element: <Login /> },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
