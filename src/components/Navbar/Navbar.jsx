import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)

    const hendleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="w-full h-20 bg-slate-200 text-xl">
            <div className="flex justify-between h-full items-center max-w-screen-lg mx-auto">
                <div>
                    <h1>Name</h1>
                </div>
                <div className="flex gap-5 items-center">
                    <NavLink to='/' className={({ isActive }) => isActive ? ' text-red-600' : ''}>Home</NavLink>
                    <NavLink to='/Service' className={({ isActive }) => isActive ? ' text-red-600' : ''}>Services</NavLink>
                    {
                        user?.email && <div>
                            <div className="relative z-50">
                                <button onClick={() => setOpen(!open)}>Dashboard</button>
                                {open &&
                                    <div className="flex flex-col top-[54px] bg-slate-100 absolute w-[130px] py-4 space-y-3">
                                        <NavLink to='/MySevice' className={({ isActive }) => isActive ? ' text-red-600' : ''}>My Sevice</NavLink>

                                        <NavLink to='/AddServices' className={({ isActive }) => isActive ? ' text-red-600' : ''}>Add Services</NavLink>

                                        <NavLink to='/MySchedules' className={({ isActive }) => isActive ? ' text-red-600' : ''}>My Schedules</NavLink>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
                <div>
                    {
                        user?.email ? <button onClick={hendleSignOut}>Sign Out</button> : <NavLink to='/Login'>Login</NavLink>
                    }
                    {/* <div className="hidden md:block">
                        {
                            user ? <img className="rounded-full ml-3" src={user.photoURL} alt="" /> : <img className="rounded-full" src="../../assets/images.png" alt="" />
                        }
                        {
                            user && <h1>{users.displayName}</h1>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;