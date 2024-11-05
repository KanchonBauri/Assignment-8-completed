import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>ERROR</div>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>,
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
        },
    ]
  },
]);

export default Routes;