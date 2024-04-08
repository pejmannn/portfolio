import { ButtonStyles } from "./styles";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Button = ({ title, type, isLink, link, ...otherProps }) => {
  if (isLink) {
    return (
      <motion.a 
        href={link}
        download
        className={`rounded-full px-6 py-2
    min-w-28 
    max-w-96 
    uppercase 
    duration-300
    transition
    text-xs
    md:text-base
    lg:text-lg ${
      type !== "outline" ? ButtonStyles.default : ButtonStyles.outline
    }`}
        {...otherProps}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px black"
        }}>
        {title}
      </motion.a>
    );
  }
  return (
    <motion.button
      {...otherProps}
      className={`rounded-full px-6 py-2
        min-w-28 
        max-w-96 
        uppercase 
        duration-300
        transition
        text-xs
        md:text-base
        lg:text-lg ${
          type !== "outline" ? ButtonStyles.default : ButtonStyles.outline
        }`}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px white"
        }}
    >
      {title}
    </motion.button>
  );
};

export default Button;
