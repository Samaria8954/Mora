import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";
import { Header_Footer } from "./components/Layout/Header_Footer";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

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
                path: "product",
                element: <ProductPage />
            },
            {
                path: "cart",
                element: <CartPage />
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