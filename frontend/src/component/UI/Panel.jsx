import React from 'react';

export const Panel = ({ 
  children, 
  className = '',
  title = '',
  ...props 
}) => {
  return (
    <div 
      className={`kinetic-panel rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 p-8 transition-all duration-300 hover:border-cyan-500/40 ${className}`}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-bold text-cyan-400 mb-6">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
