/**
 * @component BentoGrid
 * @description A responsive grid layout component that creates a modern "Bento Box" style interface.
 * Optimized for mobile with a single column that expands to three columns on desktop.
 * 
 * Features:
 * - Responsive grid layout
 * - Customizable through className prop
 * - Optimized for accessibility
 * - Smooth transitions and hover effects
 * 
 * @version 1.0.0
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { cn } from "../../utils";

export const BentoGrid = memo(({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';
BentoGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * Individual grid item component with hover effects and active states
 */
export const BentoGridItem = memo(({
  className,
  title,
  description,
  header,
  icon,
  onClick,
  href,
  isActive,
}) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 p-4 bg-gray-50 hover:bg-gray-100 justify-between flex flex-col space-y-4 cursor-pointer",
        isActive && "bg-gray-100",
        className
      )}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e);
        }
      }}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-gray-800 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-600 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
});

BentoGridItem.displayName = 'BentoGridItem';
BentoGridItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  header: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  isActive: PropTypes.bool,
}; 