import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";
import { Header_Footer } from "./components/Layout/Header_Footer";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { ReviewPage } from "./pages/Review";
import { CollectionPage } from "./pages/CollectionPage";
import { TermNCondition } from "./pages/TermNCondition";
import { RefundPolicy } from "./pages/RefundPolicy";
import { Checkout } from "./pages/Checkout";




// React outer DOM
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header_Footer />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "review",
                element: < ReviewPage />
            },
            {
                path: "collection",
                element: < CollectionPage />
            },

            {
                path: "product",
                element: <ProductPage />
            },
             
            {
                path: "cart",
                element: <CartPage />
            },
             {
                path: "checkout",
                element: <Checkout />
            },
             {
                path: "terms&conditions",
                element: <TermNCondition />
            },
              {
                path: "refundpolicy",
                element: <RefundPolicy />
            },
        ]
    },
]);


const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}
export default App;