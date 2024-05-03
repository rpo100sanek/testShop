import React from 'react';
import './button.css';

export const Button = ({ onClick, type, children, size = 's' }) => {
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