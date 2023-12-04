import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import './Navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading/Loading";

const Navbar = () => {
    const [open,setOpen]= useState(false)
    const {user,logout, loading}= useContext(AuthContext);
    const handleLogout = () => {
        logout()
          .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Logged out successfully',
                icon:'success',
                confirmButtonText: 'Cool'
              })
          })
          .catch((error) => console.log(error));
      };
    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to={'/apartment'}>Apartment</NavLink></li>
        {user ? '' : <li><NavLink to={'/login'}>Login</NavLink></li>}
    </>
    const profileLinks = <>
        <li><NavLink>{user?.displayName}</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
    </>
    

    return (
        <div>
            {/* <img onClick={()=>setOpen(!open)} className="rounded-full w-12" src={user?.photoURL} alt="" />  */}
            {/* {profileLinks} */}
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black font-medium rounded-box w-52">
                        {navOptions}
                    </ul>
                    </div>
                    <img className="w-56" src={logo} alt="" />
                    {/* <a className="btn btn-ghost text-xl">Bistro Boss</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        loading ? <Loading></Loading> : <>
                        {user ?
                        <div className="">
                            <div tabIndex={0} >
                                <img onClick={()=>setOpen(!open)} className="rounded-full w-12" src={user?.photoURL} alt="" /> 
                            </div>
                            <ul className={` menu gap-2 text-center font-semibold  lg:text-lg bg-zinc-700 p-4 rounded-md order-last absolute right-7 duration-1000 ${open ? "top-8" : "hidden"}`}>
                                {profileLinks}
                            </ul>
                        </div> : ''} </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;