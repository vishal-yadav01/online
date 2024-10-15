import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify"; // Import ToastContainer globally
import "react-toastify/dist/ReactToastify.css"; // Make sure CSS is imported

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";
import AppContextProvider from "./store/Store.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </AppContextProvider>
);
