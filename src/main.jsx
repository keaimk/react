import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App50 from "./practice/App50.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App50 />
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
