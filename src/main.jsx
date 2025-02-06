import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "../src/Routes";
import GlobalStyles from "./styles/globalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <App />
    </HelmetProvider>
  </StrictMode>
);
