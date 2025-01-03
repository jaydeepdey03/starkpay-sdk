import React from "react";
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  // Add other props as needed
}

export const Button: React.FC<ButtonProps> = ({
  children = "Button",
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
};
