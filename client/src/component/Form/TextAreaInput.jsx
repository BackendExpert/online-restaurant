// TextAreaInput.jsx
import React from 'react';

const TextAreaInput = ({
    label,
    name,
    rows = 4,
    value,
    onChange,
    placeholder = '',
    required = false,
}) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 
                           placeholder-gray-400 shadow-sm focus:outline-none focus:border-orange-500 
                           focus:ring-2 focus:ring-orange-400 transition duration-200 resize-none"
            />
        </div>
    );
};

export default TextAreaInput;
