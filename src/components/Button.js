import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, href }) => {
  return (
    <a href={href || ''} target="_blank">
      <button
        type="button"
        className={`
      ${sizes[size] || sizes.default}
      ${className}
      bg-primary-lighter
      hover:bg-primary
      rounded
      text-white
      button
     `}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
