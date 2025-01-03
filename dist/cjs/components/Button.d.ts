import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
export {};
