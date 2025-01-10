import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  variant = 'primary', // Default to primary
  link, 
  text,
  className = '' // Add className prop with default empty string
}) => {
  const buttonStyles = variant === 'primary' 
    ? 'bg-[#00FFA3] hover:bg-[#00E693] text-black' 
    : 'bg-transparent border border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white';

  return (
    <a 
      href={link} 
      className={`inline-block px-6 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap text-center ${buttonStyles} ${className}`}
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string, // Add className to PropTypes
};

export default Button; 