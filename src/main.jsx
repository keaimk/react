import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App41 from "./practice/App41.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App41 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
