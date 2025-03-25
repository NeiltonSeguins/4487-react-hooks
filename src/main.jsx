import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TarefasProvider from "./context/TarefasContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </StrictMode>,
);
