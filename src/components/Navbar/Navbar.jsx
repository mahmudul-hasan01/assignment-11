import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiFillCaretDown } from "react-icons/ai";
import logo from '../../assets/Image/home-service-creative-logo-design-with-white-background-vector.jpg'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)

    const hendleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
            <div className="navbar bg-base-100 max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            <div className="flex gap-5 items-center text-xl">
                                <NavLink to='/' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>Home</NavLink>
                                <NavLink to='/Service' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>Services</NavLink>
                                {
                                user?.email && <div>
                                    <div className="relative z-50">
                                        <button className="flex items-center" onClick={() => setOpen(!open)}>Dashboard <AiFillCaretDown></AiFillCaretDown></button>
                                        {open &&
                                            <div className="flex flex-col rounded-xl lg:top-[54px] -left-10 bg-slate-100 px-2 absolute w-[200px] text-center py-4 space-y-3">
                                                <NavLink to='/MySevice' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>My Sevice</NavLink>

                                                <NavLink to='/AddServices' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>Add Services</NavLink>

                                                <NavLink to='/MySchedules' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>My Schedules</NavLink>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                            </div>
                        </ul>
                    </div>
                    <img className="h-[100px] w-[200px]" src={logo}></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex gap-5 items-center text-xl">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>Home</NavLink>
                            <NavLink to='/Service' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>Services</NavLink>
                            {
                                user?.email && <div>
                                    <div className="relative z-50">
                                        <button className="flex items-center" onClick={() => setOpen(!open)}>Dashboard <AiFillCaretDown></AiFillCaretDown></button>
                                        {open &&
                                            <div className="flex flex-col rounded-xl lg:top-[54px] -left-10 bg-slate-100 px-2 absolute w-[200px] text-center py-4 space-y-3">
                                                <NavLink to='/MySevice' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>My Sevice</NavLink>

                                                <NavLink to='/AddServices' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>Add Services</NavLink>

                                                <NavLink to='/MySchedules' className={({ isActive }) => isActive ? 'px-4 py-2 rounded-lg bg-yellow-500 text-white' : 'px-4 py-2 rounded-lg'}>My Schedules</NavLink>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }

                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <button className="px-4 py-2 text-xl rounded-lg bg-yellow-500 text-white" onClick={hendleSignOut}>Sign Out</button> : <NavLink className='px-4 py-2 rounded-lg bg-yellow-500 text-xl text-white' to='/Login'>Login</NavLink>
                    }
                </div>
            </div>            
    );
};

export default Navbar;