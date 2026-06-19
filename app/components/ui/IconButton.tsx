"use client";
import { motion } from "motion/react";
import { IconType } from "react-icons";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  active?: boolean;
}

const IconButton = ({ icon, onClick, active }: IconButtonProps) => {
  return (
    <motion.button
      animate={{
        backgroundColor: "var(--primary)",
        color: "var(--foreground)",
      }}
      whileHover={{
        backgroundColor: "#3a3d3b",
        color: "#ffffff",
      }}
      whileTap={{ scale: 0.99, y: 1, backgroundColor: "#555756" }}
      transition={{ type: "tween", damping: 5 }}
      onClick={onClick}
      className="size-10 flex flex-1 flex-row justify-center items-center z-50 h-full rounded-md p-2 dark:bg-dark-foreground"
    >
      <span className={`text-2xl ${active ? `text-violet-500` : `text-white`}`}>
        {icon}
      </span>
    </motion.button>
  );
};

export default IconButton;
