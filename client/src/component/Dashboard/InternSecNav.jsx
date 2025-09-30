import React, { useState, useRef, useEffect } from "react";
import { MdDashboard, MdSettings, MdCheckCircle, MdOutlineMail, MdHistory } from "react-icons/md";
import { FaUserShield, FaBalanceScale, FaUsers, FaUserGraduate, FaClipboardList, FaBars } from "react-icons/fa";

const menuItems = [
    { link: "/my-account", name: "Overview", icon: <MdDashboard /> },
    {
        name: "My Management",
        icon: <FaUserGraduate />,
        submenu: [
            { link: "/my-account/attendance", name: "Attendance", icon: <MdCheckCircle /> },
            { link: "/my-account/letters", name: "Internship Letters", icon: <MdOutlineMail /> },
            { link: "/my-account/evaluations", name: "Evaluations", icon: <FaClipboardList /> },
        ],
    },
    {
        name: "Projects & Tasks",
        icon: <FaClipboardList />,
        submenu: [
            { link: "/my-account/projects", name: "Projects", icon: <FaClipboardList /> },
            { link: "/my-account/tasks", name: "Tasks", icon: <MdCheckCircle /> },
            { link: "/my-account/code-activity", name: "Code Activity", icon: <MdHistory /> },
            { link: "/my-account/reviews", name: "Reviews", icon: <FaBalanceScale /> },
        ],
    },
];

const InternSecNav = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef();

    // Close everything if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenMenu(null);
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav ref={navRef} className="bg-gray-800 text-gray-200 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
                {/* Hamburger for Mobile */}
                <button
                    className="lg:hidden text-gray-200"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <FaBars size={24} />
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative">
                            {item.submenu ? (
                                <button
                                    onClick={() =>
                                        setOpenMenu(openMenu === item.name ? null : item.name)
                                    }
                                    className="flex items-center gap-1 px-3 py-2 hover:text-white transition"
                                >
                                    {item.icon} <span>{item.name}</span>
                                </button>
                            ) : (
                                <a
                                    href={item.link}
                                    className="flex items-center gap-1 px-3 py-2 hover:text-white transition"
                                >
                                    {item.icon} <span>{item.name}</span>
                                </a>
                            )}

                            {/* Submenu */}
                            {item.submenu && openMenu === item.name && (
                                <ul className="absolute top-full left-0 bg-gray-700 shadow-md mt-3 min-w-[200px] z-50 rounded-b-md">
                                    {item.submenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <a
                                                href={sub.link}
                                                className="flex items-center gap-2 px-4 py-4 hover:bg-gray-600 transition"
                                            >
                                                {sub.icon} <span>{sub.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 shadow-md z-40">
                        <ul className="flex flex-col gap-1 py-2">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative">
                                    {item.submenu ? (
                                        <button
                                            onClick={() =>
                                                setOpenMenu(openMenu === item.name ? null : item.name)
                                            }
                                            className="flex items-center gap-1 px-4 py-2 w-full text-left hover:text-white transition"
                                        >
                                            {item.icon} <span>{item.name}</span>
                                        </button>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className="flex items-center gap-1 px-4 py-2 w-full text-left hover:text-white transition"
                                        >
                                            {item.icon} <span>{item.name}</span>
                                        </a>
                                    )}

                                    {/* Mobile Submenu */}
                                    {item.submenu && openMenu === item.name && (
                                        <ul className="bg-gray-700 flex flex-col mt-1 rounded-md">
                                            {item.submenu.map((sub, subIndex) => (
                                                <li key={subIndex}>
                                                    <a
                                                        href={sub.link}
                                                        className="flex items-center gap-2 px-6 py-2 hover:bg-gray-600 transition"
                                                    >
                                                        {sub.icon} <span>{sub.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default InternSecNav;
