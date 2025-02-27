import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RContainer from "./r/RContainer";
// import StudentApp from "./StudentApp";
// import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RContainer />
    {/* <StudentApp /> */}
    {/* <App /> */}
  </StrictMode>
);
