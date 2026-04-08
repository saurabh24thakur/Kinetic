import React from 'react';

export const Badge = ({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40',
    purple: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
    success: 'bg-green-500/20 text-green-300 border border-green-500/40',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40',
  };
  
  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
