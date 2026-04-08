import React from 'react';

export const Grid = ({ 
  children, 
  cols = 3,
  gap = 6,
  className = '',
  ...props 
}) => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };
  
  const gapClass = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };
  
  return (
    <div 
      className={`grid ${colsClass[cols] || colsClass[3]} ${gapClass[gap] || gapClass[6]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
