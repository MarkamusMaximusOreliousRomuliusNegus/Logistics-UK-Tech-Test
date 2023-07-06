import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/views/About";
import Drivers from "./components/views/Drivers";
import Home from "./components/views/Home";
import Vehicles from "./components/views/Vehicles";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/drivers",
    element: <Drivers />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
