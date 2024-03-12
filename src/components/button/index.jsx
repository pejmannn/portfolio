import { ButtonStyles } from "./styles";

const Button = ({ title, type, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={
        type !== "outline" ? ButtonStyles.default : ButtonStyles.outline
      }
    >
      {title}
    </button>
  );
};

export default Button;
