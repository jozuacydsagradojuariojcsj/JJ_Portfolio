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

      <nav className="text-white font-mono hidden sm:flex flex-row justify-evenly p-2 w-full fixed top-0 z-50 h-17 backdrop-blur-3xl bg-popover dark:border-2 dark:border-popover-icon rounded-b-md shadow-2xl">
        <Button
          active={activeTab === "home"}
          onClick={() => {
            setActiveTab("home");
          }}
          text="Home"
        />
        <Button
          active={activeTab === "about"}
          onClick={() => {
            setActiveTab("about");
          }}
          text="About"
        />
        <Button
          active={activeTab === "projects"}
          onClick={() => {
            setActiveTab("projects");
          }}
          text="Projects"
        />
        <Button
          active={activeTab === "contact"}
          onClick={() => {
            setActiveTab("contact");
          }}
          text="Contact"
        />
      </nav>
      <nav className="fixed w-full bottom-0 h-17 flex flex-row justify-between xs:justify-evenly bg-popover dark:border-2 dark:border-popover-icon sm:hidden z-50 rounded-t-sm shadow-black shadow-lg">
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
