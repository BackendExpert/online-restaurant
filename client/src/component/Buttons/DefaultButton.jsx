import React from 'react';

const DefaultButton = ({
    label = "Click the Button",
    onClick,
    type = "button",
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-6 w-auto px-4 py-3 rounded-xl font-semibold text-white shadow-lg transition duration-300
                ${disabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2'}
            `}
        >
            {label}
        </button>
    );
};

export default DefaultButton;
