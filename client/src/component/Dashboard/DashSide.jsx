import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    MdDashboard,
    MdSettings,
    MdLogout,
    MdHistory,
    MdOutlineMail,
    MdCheckCircle,
} from "react-icons/md";
import {
    FaUserShield,
    FaChevronDown,
    FaChevronUp,
    FaUsers,
    FaUserGraduate,
} from "react-icons/fa6";
import { FaClipboardList, FaBalanceScale } from "react-icons/fa";
import defultImg from "../../assets/user.png";
import { useAuth } from "../../context/AuthContext";
import uoplogo from "../../assets/uoplogo.png";
import API from "../../services/api";



const DashSide = ({ closeSidebar }) => {
    const { auth, logout } = useAuth();
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    const [MyProfileImage, setMyProfileImage] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        const fetchmyprofileimage = async () => {
            try {
                const res = await API.get(
                    `/member/get-myprofileimage?nocache=${Date.now()}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Cache-Control": "no-cache",
                            Pragma: "no-cache",
                            Expires: "0",
                        },
                    }
                );

                setMyProfileImage(Array.isArray(res.data.result) ? res.data.result : [res.data.result]);
            } catch (err) {
                console.error("Failed to fetch roles:", err);
                setMyProfileImage([]);
            }
        };

        fetchmyprofileimage();
    }, [token]);

    // ✅ Original Menu Items (unchanged)
    const menuItems = [
        { link: "/Dashboard", name: "Overview", icon: <MdDashboard /> },

        {
            name: "System Roles",
            icon: <FaUserShield />,
            submenu: [
                { link: "/Dashboard/manage-roles", name: "Roles", icon: <MdSettings /> },
                { link: "/Dashboard/permissions", name: "Permissions", icon: <FaBalanceScale /> },
                { link: "/Dashboard/system-users", name: "System Users", icon: <FaUsers /> },
            ],
        },

        {
            name: "Internship Management",
            icon: <FaUserGraduate />,
            submenu: [
                { link: "/Dashboard/interns", name: "Interns", icon: <FaUsers /> },
                { link: "/Dashboard/attendance", name: "Attendance", icon: <MdCheckCircle /> },
                { link: "/Dashboard/letters", name: "Internship Letters", icon: <MdOutlineMail /> },
                { link: "/Dashboard/evaluations", name: "Evaluations", icon: <FaClipboardList /> },
            ],
        },

        {
            name: "Projects & Tasks",
            icon: <FaClipboardList />,
            submenu: [
                { link: "/Dashboard/projects", name: "Projects", icon: <FaClipboardList /> },
                { link: "/Dashboard/tasks", name: "Tasks", icon: <MdCheckCircle /> },
                { link: "/Dashboard/code-activity", name: "Code Activity", icon: <MdHistory /> },
                { link: "/Dashboard/reviews", name: "Reviews", icon: <FaBalanceScale /> },
            ],
        },

        {
            name: "Collaboration",
            icon: <MdOutlineMail />,
            submenu: [
                { link: "/Dashboard/discussions", name: "Discussions", icon: <MdOutlineMail /> },
                { link: "/Dashboard/issues", name: "Issue Tracker", icon: <FaClipboardList /> },
                { link: "/Dashboard/resources", name: "Shared Resources", icon: <FaUsers /> },
            ],
        },

        {
            name: "Reports & Analytics",
            icon: <MdHistory />,
            submenu: [
                { link: "/Dashboard/activities", name: "Activity Logs", icon: <MdHistory /> },
                { link: "/Dashboard/reports", name: "Reports", icon: <FaClipboardList /> },
                { link: "/Dashboard/leaderboard", name: "Leaderboard", icon: <FaUsers /> },
            ],
        },
    ];


    return (
        <aside className="h-full flex flex-col bg-white">
            {/* Header */}
            <div className="flex flex-col items-center py-6 border-b border-purple-200">
                <img src={uoplogo} alt="UOP Logo" className="h-14 w-auto" />
                <h1 className="text-sm font-extrabold text-purple-700 mt-2 tracking-wide">
                    M@E System
                </h1>
            </div>

            {/* Profile */}
            <div className="px-6 py-6 border-b border-purple-200">
                <div className="flex items-center gap-4">
                    {MyProfileImage[0]?.profile_image ? (
                        <img
                            src={`${import.meta.env.VITE_APP_API}/uploads/${MyProfileImage[0].profile_image}`}
                            alt="User"
                            className="w-12 h-12 p-1 rounded-full border-2 border-purple-500 shadow-sm"
                        />
                    ) : (
                        <img
                            src={defultImg}
                            alt="User"
                            className="w-12 h-12 p-1 rounded-full border-2 border-purple-500 shadow-sm"
                        />
                    )}
                    <div>
                        <h2 className="text-xl font-bold text-purple-700">
                            {auth.user?.username || "User"}
                        </h2>
                        <p className="text-gray-500 text-xs uppercase">{auth?.role}</p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 mt-4 space-y-1 overflow-y-auto">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        {!item.submenu ? (
                            <NavLink
                                to={item.link}
                                onClick={closeSidebar}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300
                                    ${isActive
                                        ? "bg-purple-600 text-white shadow-sm"
                                        : "text-purple-700 hover:bg-purple-100 hover:text-purple-900"}`
                                }
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm">{item.name}</span>
                            </NavLink>
                        ) : (
                            <>
                                <button
                                    onClick={() => toggleMenu(index)}
                                    className={`w-full flex justify-between px-4 py-3 rounded-lg transition-all duration-300
                                        ${openMenu === index
                                            ? "bg-purple-600 text-white shadow-sm"
                                            : "text-purple-700 hover:bg-purple-100 hover:text-purple-900"}`}
                                >
                                    <div className="flex gap-3">
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="text-sm">{item.name}</span>
                                    </div>
                                    {openMenu === index ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {openMenu === index && (
                                    <div className="ml-6 mt-1 space-y-1">
                                        {item.submenu.map((sub, subIndex) => (
                                            <NavLink
                                                key={subIndex}
                                                to={sub.link}
                                                onClick={closeSidebar}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                                                    ${isActive
                                                        ? "bg-purple-200 text-purple-900"
                                                        : "text-purple-700 hover:bg-purple-100 hover:text-purple-900"}`
                                                }
                                            >
                                                <span className="text-base">{sub.icon}</span>
                                                <span className="text-sm">{sub.name}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}

                {/* Logout */}
                <button
                    onClick={logout}
                    className="flex items-center gap-3 w-full px-4 py-3 mt-4 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-300 font-medium"
                >
                    <MdLogout className="text-lg" />
                    <span className="text-sm">Logout</span>
                </button>
            </nav>

            {/* Footer */}
            <div className="p-4 text-center text-xs text-purple-400 border-t border-purple-200">
                © {new Date().getFullYear()} Monitoring & Evaluation
            </div>
        </aside>
    );
};

export default DashSide;
