import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/Logo.png";
import { useAuth } from "../../context/AuthContext";

const WebNav = () => {
    const { auth } = useAuth()
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Meals", path: "/meals" },
        { name: auth.token === null ? "Login" : auth?.user?.username, path: auth.token === null ? '/login' : '/Dashboard' },
    ];

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isHome && !scrolled ? "bg-transparent" : "bg-black shadow-lg"
                }`}
        >
            <div className="flex justify-between items-center h-20 px-6 md:px-16 lg:px-32">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={Logo} alt="Logo" className="h-12 w-auto drop-shadow-md" />
                    <h1 className="text-2xl md:text-3xl text-orange-500 font-extrabold tracking-wide">
                        zavory
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 text-white text-lg font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={`relative transition-colors duration-300 hover:text-orange-500 ${location.pathname === link.path ? "text-orange-500" : ""
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>


                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl focus:outline-none"
                    >
                        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black text-white transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold text-orange-500">Menu</h2>
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl focus:outline-none"
                    >
                        <HiOutlineX />
                    </button>
                </div>
                <div className="flex flex-col items-start px-8 py-6 space-y-6 text-lg font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            onClick={() => setIsOpen(false)}
                            to={link.path}
                            className={`hover:text-orange-500 transition-colors duration-300 ${location.pathname === link.path ? "text-orange-500" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default WebNav;
