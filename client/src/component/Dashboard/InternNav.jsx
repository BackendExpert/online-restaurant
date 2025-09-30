import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import uoplogo from '../../assets/uoplogo.png';
import { useAuth } from "../../context/AuthContext";

const InternNav = () => {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMobileSearch = () => setMobileSearchOpen(!mobileSearchOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const { auth, logout } = useAuth() 

    return (
        <nav className="bg-gray-900 text-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo / Brand */}
                <div className="flex items-center gap-2">
                    <img src={uoplogo} alt="UOP Logo" className="h-12 w-auto" />
                    <span className="text-gray-400 text-sm hidden sm:block">v1.0</span>
                </div>

                {/* Desktop Search Box */}
                <div className="hidden xl:flex flex-1 mx-6 max-w-md">
                    <div className="relative text-gray-400 w-full">
                        <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                </div>

                {/* Mobile Search Button */}
                <div className="flex items-center gap-4">
                    <button onClick={toggleMobileSearch} className="text-gray-400 xl:hidden">
                        {mobileSearchOpen ? <FaTimes className="text-2xl" /> : <FaSearch className="text-2xl" />}
                    </button>
                    {/* User Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-2 focus:outline-none"
                        >
                            <FaUserCircle className="text-2xl text-gray-400" />
                            <span className="text-sm">{auth?.user?.username}</span>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-gray-200 rounded-md shadow-lg py-2 z-150">
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition">
                                    Profile
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition">
                                    Settings
                                </button>
                                <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Search Input */}
            {mobileSearchOpen && (
                <div className="xl:hidden px-4 pb-4">
                    <div className="relative text-gray-400">
                        <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default InternNav;
