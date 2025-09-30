import React from 'react';

const Dropdown = ({ label, name, onChange, required = false, options = [] }) => {
    return (
        <div className="mb-5">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 text-gray-900 
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition duration-200"
            >
                <option value="" className="text-gray-500">Select an option</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
