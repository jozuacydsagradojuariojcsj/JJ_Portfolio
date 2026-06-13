"use client";
import { motion } from "motion/react";

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "tween", damping: 5 }}
      className="border border-white text-xs sm:text-base"
    >
      {text}
    </motion.button>
  );
};

export default Button;
