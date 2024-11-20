import { createBrowserRouter } from "react-router-dom";

import Products from "../components/products";
import App from "../App";
import SingleProduct from "../components/singleProduct";


const routes =  createBrowserRouter([
    { path: "/",
      element:<App/>
      
     },
     {
         path: "/products",
         element: <Products/>,
      children: [
      
    
         
   //  { path: "/products/new", component: ProductForm },
             { path: ":id", 
               element: <SingleProduct/>,
             },
         ],

     }
    
])
export default routes;