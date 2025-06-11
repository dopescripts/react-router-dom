import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./components";
import Layout from "./Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ path: "", Component: Home }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
