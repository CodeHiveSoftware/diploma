'use client'
import React from 'react';

export type ButtonProps = {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Expect onClick handler as a prop
}



const Button = ({ title, type = 'button', onClick }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className="bg-gray hover:bg-primary/80 hover:text-gray transition-all duration-300 text-primary rounded-xl px-3 py-1.5 hover:border-green-300 border text-xl">
            {title}
        </button>
    );
};

export default Button;
