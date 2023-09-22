import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties/AllProperties";
import AddProperty from "../Pages/AddProperty/AddProperty";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproperties",
        element: <AllProperties />,
      },
      {
        path: "/addproperty",
        element: (
          <PrivateRoutes>
            <AddProperty />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
