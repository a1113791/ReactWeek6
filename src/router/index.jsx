import { createBrowserRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../page/HomePage";
import ProductsPage from "../page/ProductsPage";
import ProductDetailPage from "../page/ProductDetailPage";
import CartPage from "../page/CartPage";
import NetFound from "../page/NetFound";

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
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NetFound />,
  },
]);

export default router;
