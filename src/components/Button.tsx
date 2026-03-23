import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const classes = classNames('px-4 py-2 rounded', {
    'bg-blue-500 text-white hover:bg-blue-700': variant === 'primary',
    'bg-gray-200 text-gray-600 hover:bg-gray-300': variant === 'secondary'
  });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;