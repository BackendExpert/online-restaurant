import React from "react";
import { FaHeart } from "react-icons/fa";
import uoplogo from '../../assets/uoplogo.png'

const InternFooter = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

                {/* Logo / Brand */}
                <div className="flex flex-col items-start">
                    <img src={uoplogo} alt="" className="h-12 w-auto"/>
                    <h1 className="text-2xl font-bold text-cyan-400">The Intern Dashboard</h1>
                    <p className="mt-2 text-white text-sm">
                        Intern Monitoring and Evaluation (M&E) System.
                    </p>
                    <p className="mt-2 text-gray-400 text-sm">
                        A modern dashboard built for simplicity & speed.
                    </p>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p className="flex items-center gap-1">
                    &copy; {new Date().getFullYear()} Made with
                    <span className="text-red-500 animate-pulse">
                        <FaHeart />
                    </span>
                </p>
                {/* <p className="mt-2 md:mt-0">
                    Developed & Engineered by{" "}
                    <a
                        href="http://blackalphalabs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                        BlackAlphaLabs
                    </a>
                </p> */}
            </div>
        </footer>
    );
};

export default InternFooter;
