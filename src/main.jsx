import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App49 from "./practice/App49.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App49 />
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
