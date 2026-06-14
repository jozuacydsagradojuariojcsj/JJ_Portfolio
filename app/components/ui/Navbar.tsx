"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence } from "motion/react";
import Button from "./Button";
import IconButton from "./IconButton";
import Menu from "../layout/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <AnimatePresence>
        {showMenu && <Menu onClose={closeMenu} />}
      </AnimatePresence>

      <nav className="text-white font-mono hidden sm:flex flex-row justify-evenly border-green-500 p-2 w-3/4 fixed top-6 z-50 border backdrop-blur-3xl left-1/2 -translate-x-1/2">
        <Button text="Home" />
        <Button text="About" />
        <Button text="Projects" />
        <Button text="Contact" />
      </nav>
      <nav className="text-white font-mono flex flex-row justify-between border border-green-500 p-2 sm:hidden">
        <IconButton onClick={openMenu} icon={<IoMenu />} />
      </nav>
    </>
  );
};

export default Navbar;
