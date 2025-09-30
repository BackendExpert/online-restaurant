import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../assets/Logo.png";

const MainFooter = () => {
    return (
        <footer className="bg-black text-gray-300 pt-16 pb-4">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center space-x-3">
                            <img src={Logo} alt="Logo" className="h-12 w-auto" />
                            <h1 className="text-orange-500 font-bold text-2xl uppercase">
                                zavory
                            </h1>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                            Crafting exceptional dining experiences with flavor, passion, and
                            creativity. Your satisfaction is our inspiration.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-white font-semibold text-lg mb-4">
                            Quick Links
                        </h2>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/meals"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Meals
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/my-account"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    My Account
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h2 className="text-white font-semibold text-lg mb-4">Explore</h2>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#reservations"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Reservations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#careers"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#blog"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-white font-semibold text-lg mb-4">
                            Contact Us
                        </h2>
                        <p className="text-sm">123 Cross Street, ABC, XYZ</p>
                        <p className="text-sm mt-2">Email: info.zavory@example.com</p>
                        <p className="text-sm mt-1">Phone: +94 711758851</p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Zavory. All rights reserved.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Maintained & Engineered by{" "}
                        <a href="https://blackalphalabs.com/" target="_blank">
                            <span className="text-orange-500 font-semibold">
                                BlackAlphaLabs
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
