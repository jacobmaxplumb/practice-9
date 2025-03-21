import React from "react";
import { createRoot } from "react-dom/client";
import AppClass from "./components/AppClass";
import "./styles/reset.css";
import "./styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <AppClass className="class-based" />
  </>
);
