import {NavLink} from "react-router-dom";
import {DashboardSquareIcon, SettingsIcon, TaskIcon} from "./Icons.tsx";

function Navbar() {

    const navLinks = [
        { name: "Dashboard", url: "/", icon: <DashboardSquareIcon /> },
        { name: "Analysis", url: "/analysis", icon: <TaskIcon /> },
        { name: "Settings", url: "/settings", icon: <SettingsIcon /> },
    ];

    return (
        <header className="block">
            <div className="border-b border-gray-200">
                <nav aria-label="Tabs" className="-mb-px flex">
                    {navLinks.map((tab) => (
                        <NavLink
                            key={tab.name}
                            to={tab.url}
                            className={({isActive}) =>
                                `w-full flex items-center justify-center gap-3 border-b-2 px-4 py-4 text-center text-sm font-medium duration-200 ${
                                    isActive ? "border-amber-400 text-amber-900" : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700"
                                }`
                            }
                        >
                            {tab.icon}
                            {tab.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
