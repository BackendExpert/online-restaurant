import React from 'react';

const DateInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-5">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type="date"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 text-gray-900 
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition duration-200"
            />
        </div>
    );
};

export default DateInput;
