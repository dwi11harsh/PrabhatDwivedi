import React from "react";

interface NeomorphicCardProps {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
  flat?: boolean;
}

const NeomorphicCard: React.FC<NeomorphicCardProps> = ({
  children,
  className = "",
  inset = false,
  flat = false,
}) => {
  const shadowClass = inset
    ? "shadow-neo-inset"
    : flat
      ? "shadow-neo-flat"
      : "shadow-neo-outset";

  return (
    <div
      className={`
      bg-neo-bg 
      rounded-2xl 
      p-6 
      ${shadowClass}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default NeomorphicCard;
