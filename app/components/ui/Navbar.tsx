"use client";
import { useState } from "react";
import {
  IoMenu,
  IoHome,
  IoInformationCircleOutline,
  IoFolderOpen,
} from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { AnimatePresence } from "motion/react";
import Button from "./Button";
import IconButton from "./IconButton";
import Menu from "../layout/Menu";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
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
      <nav className="fixed w-full bottom-0 h-17 flex flex-row justify-between xs:justify-evenly border-2 border-dark-primary sm:hidden z-50 dark:bg-dark-foreground rounded-t-sm">
        <IconButton
          active={activeTab === "home"}
          onClick={() => {
            setActiveTab("home");
          }}
          icon={<IoHome />}
        />
        <IconButton
          active={activeTab === "about"}
          onClick={() => {
            setActiveTab("about");
          }}
          icon={<IoInformationCircleOutline />}
        />
        <IconButton
          active={activeTab === "projects"}
          onClick={() => {
            setActiveTab("projects");
          }}
          icon={<IoFolderOpen />}
        />
        <IconButton
          active={activeTab === "contact"}
          onClick={() => {
            setActiveTab("contact");
          }}
          icon={<IoMdContact />}
        />
      </nav>
    </>
  );
};

export default Navbar;
