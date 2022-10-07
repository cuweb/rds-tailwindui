import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = ({ disabled, title, ...rest }: ButtonProps) => (
  <button
    className={`bg-transparent text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-default ${!disabled &&
      'hover:bg-gray-500'}`}
    disabled={disabled}
    {...rest}
  >
    {title}
  </button>
);

// export default Button;
