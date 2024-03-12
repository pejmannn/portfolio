const repeatedStyle = `rounded-full px-6 py-2
  hover:transition-all 
  min-w-28 duration-700
  uppercase 
  
  text-xs
  md:text-base
  lg:text-lg
  `;

export const ButtonStyles = {
  default: `${repeatedStyle} bg-white text-black 
  hover:bg-transparent 
  hover:border 
  hover:text-white
  `,
  outline: `
  ${repeatedStyle}
  border 
  hover:bg-white 
  hover:border-none 
  hover:text-black 
 `,
};
