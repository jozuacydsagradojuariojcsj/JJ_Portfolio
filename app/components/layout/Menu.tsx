"use client";
import IconButton from "../ui/IconButton";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

interface MenuProps {
  onClose: () => void;
}
const Menu = ({ onClose }: MenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full bg-white fixed z-100 flex flex-col items-end p-2"
    >
      <span>
        <IconButton onClick={onClose} icon={<IoMdClose />} />
      </span>
      <div className="text-black w-full flex flex-col border border-red-500 text-3xl gap-3 font-mono divide-y-2 divide-gray-200">
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </motion.div>
  );
};

export default Menu;
