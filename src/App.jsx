import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
}

export default App;
