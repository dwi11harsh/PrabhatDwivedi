import React from "react";

interface NeomorphicIconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NeomorphicIconButton: React.FC<NeomorphicIconButtonProps> = ({
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-12 h-12 
        bg-neo-bg 
        rounded-xl 
        shadow-neo-outset 
        hover:shadow-neo-flat 
        active:shadow-neo-inset
        flex items-center justify-center
        text-gray-600
        transition-all duration-150
        ${className}
      `}
    >
      {icon}
    </button>
  );
};

export default NeomorphicIconButton;
