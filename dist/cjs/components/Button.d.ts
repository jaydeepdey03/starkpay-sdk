import React, { ButtonHTMLAttributes } from "react";
import "../styles/main.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
export {};
