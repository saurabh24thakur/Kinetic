import React from 'react';

export const Grid = ({ 
  children, 
  cols = 3,
  gap = 6,
  responsive = true,
  className = '',
  ...props 
}) => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'sm:grid-cols-2 grid-cols-1',
    3: 'lg:grid-cols-3 sm:grid-cols-2 grid-cols-1',
    4: 'lg:grid-cols-4 md:grid-cols-2 grid-cols-1',
  };
  
  const gapClass = {
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };
  
  const gridColsClass = responsive ? (colsClass[cols] || colsClass[3]) : (colsClass[1] + ` grid-cols-${cols}`);
  
  return (
    <div 
      className={`grid ${gridColsClass} ${gapClass[gap] || gapClass[6]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
