'use client'
import React from 'react';
import {useDispatch} from "react-redux";
import {logout, login} from "@/app/lib/slices/isLogged";

export type ButtonProps = {
    title: string;
    type?: 'submit' | 'button' | 'reset';
}


const Button = ({title, type = 'button'}:ButtonProps) => {
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (title === 'Log out') {
            dispatch(logout());
        } else {
            dispatch(login());
            console.log('logged in');
        }
    };
    return (
        <button type={type} onClick={handleClick} className="bg-gray hover:bg-primary/80 hover:text-gray transition-all duration-300 text-primary rounded-xl px-3 py-1.5 hover:border-green-300 border text-xl">
            {title}
        </button>
    );
};

export default Button;
