import React from "react";
import ReactDOM from "react-dom/client";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// App
import App from "./App";
import { TMDBProvider } from "./context/TMDBContext";

// CSS
import "./css/directives.css";
import "./css/style.css";
import "./css/fonts.css";
import "./css/bootstrap-icons.css";

// Pages
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
  <TMDBProvider>
    <RouterProvider router={router} />
  </TMDBProvider>
);
