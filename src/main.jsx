import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./css/directives.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";

// Routes
const router = createBrowserRouter([
  {
    path: "/reelbox/",
    element: <App />,
    children: [
      {
        path: "/reelbox/",
        element: <HomePage />,
      },
      {
        path: "/reelbox/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
