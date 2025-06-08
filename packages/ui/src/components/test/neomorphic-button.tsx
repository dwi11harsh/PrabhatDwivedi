import React, { useState } from "react";

interface NeomorphicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const NeomorphicButton: React.FC<NeomorphicButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    px-6 py-3 rounded-xl
    bg-neo-bg
    transition-all duration-150
    font-medium
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  const variantClasses =
    variant === "primary"
      ? "text-white bg-green-500 shadow-lg hover:shadow-xl"
      : "text-gray-700";

  const shadowClasses = isPressed
    ? "shadow-neo-inset"
    : variant === "primary"
      ? ""
      : "shadow-neo-outset hover:shadow-neo-flat";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${shadowClasses} ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default NeomorphicButton;
