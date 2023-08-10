import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties/AllProperties";
import AddProperty from "../Pages/AddProperty/AddProperty";

const router= createBrowserRouter([

    {
        path: "/",
        element:<Main/>,
        children: [
            {       
                path: "/",
                element: <Home/>
            },
            {       
                path: "/allproperties",
                element: <AllProperties/>
            },
            {       
                path: "/addproperty",
                element: <AddProperty/>
            },
        ]
    }
])

export default router;