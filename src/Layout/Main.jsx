import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <div className="sticky top-0 bg-green-100 bg-opacity-30 backdrop-blur-md rounded-b-lg border shadow-2xl z-20">
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
