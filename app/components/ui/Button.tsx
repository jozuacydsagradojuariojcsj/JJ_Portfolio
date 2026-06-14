"use client";
import { motion } from "motion/react";
import { IconType } from "react-icons";

interface BaseButtonProps {
  onClick?: () => void;
}

type ButtonProps = BaseButtonProps &
  ({ text: string; icon?: IconType } | { text?: string; icon: IconType });
const Button = ({ text, icon: Icon }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "tween", damping: 5 }}
      className="border border-white text-xs sm:text-base z-50"
    >
      {Icon && <Icon />}
      {text && <span>{text}</span>}
    </motion.button>
  );
};

export default Button;
