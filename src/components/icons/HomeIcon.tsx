import React from 'react';

interface HomeIconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isSelected?: boolean;
}

const HomeIcon = ({ onClick, className, isSelected }: HomeIconProps) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isSelected ? 'white' : 'black'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 9.15789L12 2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 9.15789L12 2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 19V7.36841" stroke="white" stroke-width="2" stroke-linecap="round" />
        <path d="M19 19V7.36841" stroke="white" stroke-width="2" stroke-linecap="round" />
        <path d="M5 19H19" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  );
};

export default HomeIcon;
