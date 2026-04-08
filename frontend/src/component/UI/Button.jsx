import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'kinetic-button font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-gray-900 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-800 border border-cyan-500/30 text-cyan-400 hover:bg-gray-700 hover:border-cyan-400',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/50',
    danger: 'bg-red-600/80 hover:bg-red-600 text-white shadow-lg',
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
