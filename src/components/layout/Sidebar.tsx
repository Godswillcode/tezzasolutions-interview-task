import React from "react";
import logo from "assets/images/logo.png";

export const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-full shadow">
      <div className="pb-6 pt-12 flex justify-center">
        <img src={logo} alt="logo" className="h-20 w-20 rounded-full"/>
      </div>
    </div>
  );
};
