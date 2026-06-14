"use client";
import { motion } from "motion/react";
import { IconType } from "react-icons";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: "#3a3d3b",
        color: "#ffffff",
      }}
      whileTap={{ scale: 0.99, y: 1, backgroundColor: "#555756" }}
      transition={{ type: "tween", damping: 5 }}
      onClick={onClick}
      className="border border-white text-white z-50  rounded-md p-2 bg-gray-900"
    >
      <span className="text-base">{icon}</span>
    </motion.button>
  );
};

export default IconButton;
