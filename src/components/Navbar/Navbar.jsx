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
                    <div>
                        <div className="relative">
                            <button onClick={() => setOpen(!open)}>Dashboard</button>
                            
                        </div>
                    </div>
                </div>
                <div>
                    {
                        user ? <button onClick={hendleSignOut}>Sign Out</button> : <NavLink to='/Login'>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;