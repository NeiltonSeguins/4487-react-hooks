import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TarefasProvider from "./context/TarefasContext.jsx";
import CronometroProvider from "./context/CronometroContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TarefasProvider>
      <CronometroProvider>
        <App />
      </CronometroProvider>
    </TarefasProvider>
  </StrictMode>,
);
