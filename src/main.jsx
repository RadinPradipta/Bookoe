import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
import FetchingProvider from "./helpers/fetchingContext";
import React from "react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <FetchingProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </FetchingProvider>

  </React.StrictMode>
);

