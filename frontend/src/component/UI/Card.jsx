import React from 'react';

export const Card = ({ 
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'kinetic-card rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 p-6 transition-all duration-300';
  
  const hoverStyles = hover ? 'hover:border-cyan-500/50 hover:bg-gray-900/60 hover:shadow-2xl hover:shadow-cyan-500/20' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
