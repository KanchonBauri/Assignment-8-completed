import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Gadgets from "../components/Gadgets";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>ERROR</div>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('./categories.json'),
            children: [
              {
                path: "/",
                element: <Gadgets></Gadgets>,
                loader: () => fetch('../gadgets.json')
              },
              {
                path: "/:category",
                element: <Gadgets></Gadgets>,
                loader: () => fetch('../gadgets.json')
              }
            ]
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