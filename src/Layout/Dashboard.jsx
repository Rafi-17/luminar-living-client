import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsFillBuildingsFill } from "react-icons/bs";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to={'/dashboard/profile'}> <FaUser /> My Profile</NavLink></li>
                    <li><NavLink to={'/dashboard/announcements'}><TfiAnnouncement /> Announcements</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'/apartment'}><BsFillBuildingsFill/>Apartment</NavLink></li>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;