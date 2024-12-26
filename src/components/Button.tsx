import { cn } from '@/libs/utils';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, variant = 'filled', size = 'medium' }) => {
  const baseClasses = 'font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75';
  const filledClasses = 'bg-gradient-to-r from-primary to-primaryLight text-white hover:from-primary hover:to-primaryLight focus:ring-primaryLight';
  const outlinedClasses = `${filledClasses} hover:bg-gradient-to-r from-primary to-primaryLight`

  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-10 py-3 text-lg', 
  };

  const classes = `inline-flex items-center p-0.5 ${baseClasses}  ${variant === 'filled' ? filledClasses : outlinedClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className={cn(
        `flex items-center justify-center rounded-lg`,
        `${sizeClasses[size]}`,
        variant === 'outlined' && 'bg-black hover:bg-transparent',
        variant === 'filled' && 'hover:bg-black',
      )}>
      {children}
      </span>
    </button>
  );
};

export default Button;