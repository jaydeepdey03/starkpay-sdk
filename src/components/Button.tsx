import React, {ButtonHTMLAttributes} from "react";
import "../styles/main.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  // Add any custom props here
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
