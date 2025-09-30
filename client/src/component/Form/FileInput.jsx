// FileInput.jsx
import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-900 border border-gray-200 rounded-xl bg-white 
                           file:px-4 file:py-2 file:mr-4 file:border-0 file:bg-orange-600 file:text-white 
                           file:rounded-md hover:file:bg-orange-500 shadow-sm
                           focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-400 
                           transition duration-200"
            />
        </div>
    );
};

export default FileInput;
