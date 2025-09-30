import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-5">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
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
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-xl bg-white/50 
                           file:px-4 file:py-2 file:mr-4 file:border-0 file:bg-purple-600 file:text-white 
                           file:rounded-md hover:file:bg-purple-500 focus:outline-none focus:border-purple-500 
                           focus:ring-2 focus:ring-purple-400 transition duration-200"
            />
        </div>
    );
};

export default FileInput;
