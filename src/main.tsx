import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.js";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Main = () => {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
