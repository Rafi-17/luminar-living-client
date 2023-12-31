import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { RiCoupon5Fill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const {user}= useContext(AuthContext);
    console.log(user?.role);
    console.log(user?.email);
    const isAdmin = user?.email=='admin@gmail.com';
    const isUser= false;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin && 
                        <>
                        <li><NavLink to={'/dashboard/adminProfile'}> <FaUser /> Admin Profile</NavLink></li>
                        <li><NavLink to={'/dashboard/manageMember'}><MdManageAccounts /> Manage Members</NavLink></li>
                        <li><NavLink to={'/dashboard/makeAnnouncements'}><TfiAnnouncement /> Make Announcements</NavLink></li>
                        <li><NavLink to={'/dashboard/allRequests'}><FaCodePullRequest />Agreement Requests</NavLink></li>
                        <li><NavLink to={'/dashboard/allCoupons'}><RiCoupon5Fill />Manage Coupons</NavLink></li>
                        
                        </>
                    }
                    {
                        isUser ?
                        <>
                        <li><NavLink to={'/dashboard/userProfile'}> <FaUser /> My Profile</NavLink></li>
                        <li><NavLink to={'/dashboard/announcements'}><TfiAnnouncement /> Announcements</NavLink></li>
                        </> :
                        <>
                        <li><NavLink to={'/dashboard/memberProfile'}> <FaUser /> My Profile</NavLink></li>
                        <li><NavLink to={'/dashboard/announcements'}><TfiAnnouncement />Make Payment</NavLink></li>
                        <li><NavLink to={'/dashboard/announcements'}><TfiAnnouncement />Payment History</NavLink></li>
                        <li><NavLink to={'/dashboard/announcements'}><TfiAnnouncement />Announcements</NavLink></li>
                        </>
                    }
                    
                    <div className="divider"></div>

                    {/* shared */}
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