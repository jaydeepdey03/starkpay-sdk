import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
