import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp23 from "./apps/MyApp23.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp23 />
    </Provider>
  </StrictMode>,
);
