"use client";
import { motion } from "motion/react";
import { IconType } from "react-icons";

interface BaseButtonProps {
  onClick: () => void;
  active: boolean;
}

type ButtonProps = BaseButtonProps &
  ({ text: string; icon?: IconType } | { text?: string; icon: IconType });
const Button = ({ onClick, text, icon: Icon, active }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "tween", damping: 5 }}
      onClick={onClick}
      className={`text-xs sm:text-base z-50 ${active ? `text-(--popover-icon-active)` : `text-(--popover-icon)`}`}
    >
      <span className="flex flex-row justify-center items-center text-center">
        {Icon && <Icon />}
        {text && text}
      </span>
    </motion.button>
  );
};

export default Button;
