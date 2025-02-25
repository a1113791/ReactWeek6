import { createBrowserRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../page/HomePage";
import ProductsPage from "../page/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "Products",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
