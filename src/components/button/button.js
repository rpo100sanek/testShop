import React from 'react';
import './button.css';

export const Button = ({ onClick, children }) => {
    return (
        <button
            className="button-55"
            role="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}