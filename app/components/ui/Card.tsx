import React from "react";
import { motion } from "motion/react";
interface CardProps {
  id?: number;
  title: string;
  image: string;
  text: string;
  buttonText: string;
  onClick: () => void;
}
const Card = ({ id, title, image, text, buttonText, onClick }: CardProps) => {
  return (
    <div
      key={id}
      className="bg-card flex flex-col font-mono w-full rounded-lg "
    >
      <img src={image} className="rounded-t-lg object-contain" />

      <div className="flex flex-col flex-1 text-xs md:text-sm">
        <div className="p-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <p>{text}</p>
        </div>

        <div className="flex flex-col p-2 border-t border-popover-icon items-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "tween", damping: 5 }}
            onClick={onClick}
            className="bg-button text-center rounded-sm h-7 w-3/4 text-button-foreground"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Card;
