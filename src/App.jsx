import LoginPage from "./pages/login-page";
import DashboardPage from "./pages/dashboard-page";
import RegisterPage from "./pages/register-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
