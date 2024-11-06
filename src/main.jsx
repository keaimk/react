import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp23 from "./apps/MyApp23.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp23 />
  </StrictMode>,
);
