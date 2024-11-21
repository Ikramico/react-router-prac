import { createBrowserRouter } from "react-router-dom";

import Products from "../components/products";
import App from "../App";
import SinglePage from "../components/SinglePage";



const routes =  createBrowserRouter([
    { path: "/",
      element:<App/>,
      
      
     },
     {
         path: "products",
         element: <Products/>,},
         
             { path: "products/:id", 
               element:<SinglePage/>
             },
         

     
    
])
export default routes;