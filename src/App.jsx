import React from "react";
import { NavBar } from "./components";
import { Outlet } from "react-router-dom";
import ReelBoxFooter from "./components/ReelBoxFooter/ReelBoxFooter";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ReelBoxFooter />
    </>
  );
}

export default App;
