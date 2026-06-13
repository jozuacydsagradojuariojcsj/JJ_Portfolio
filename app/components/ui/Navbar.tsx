import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="text-white font-mono w-3/4 fixed top-6 z-50 border border-green-500  backdrop-blur-3xl left-1/2 -translate-x-1/2 flex flex-row p-1 sm:p-2 justify-evenly">
      <Button text="Home" />
      <Button text="About" />
      <Button text="Projects" />
      <Button text="Contact" />
    </nav>
  );
};

export default Navbar;
