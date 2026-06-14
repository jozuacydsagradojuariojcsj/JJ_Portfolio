import React from "react";
import { motion } from "motion/react";

interface MenuButtonProp {
  text: string;
}
const MenuButton = ({ text }: MenuButtonProp) => {
  return <motion.a initial={{}}>{text}</motion.a>;
};

export default MenuButton;
