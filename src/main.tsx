import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Block view source & dev tools shortcuts
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "u") ||
    (e.ctrlKey && e.key === "s")
  ) {
    e.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
