import { ButtonStyles } from "./styles";

// eslint-disable-next-line react/prop-types
const Button = ({ title, type, isLink, link, ...otherProps }) => {
  if (isLink) {
    return (
      <a
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
      >
        {title}
      </a>
    );
  }
  return (
    <button
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
    >
      {title}
    </button>
  );
};

export default Button;
