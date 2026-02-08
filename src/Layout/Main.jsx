import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";

const Main = () => {
  return (
    <div className="relative min-h-screen bg-bg">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
