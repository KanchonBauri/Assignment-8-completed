import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";


const NavBar = () => {
    return (
        <div className={`flex justify-between items-center w-11/12 sm:w-10/12 mx-auto mt-8 sm:mt-12 ${location.pathname === '/'||'/Laptops'||'/Phones'||'/Accessories'||'/Smart Watches'||'/Smart Tvs'? "absolute top-0 inset-x-0 z-10": ""}`}>
            <div className="flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-white underline" : "text-text2"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-primary" : location.pathname === '/' ? "text-white" : "text-text2"}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary" : location.pathname === '/' ? "text-white" : "text-text2"}>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/" className={`sm:text-xl lg:text-2xl font-extrabold ${location.pathname === '/' ? "text-white" : "text-text1"}`}>
                    Gadget Heaven
                </Link>
            </div>
            <div className="navbar-center hidden sm:flex gap-4 text-xs sm:text-sm md:text-base">
                <NavLink to="/" className={({isActive})=>isActive? "text-white underline": "text-text2"}>Home</NavLink>
                <NavLink to="/statistics" className={({isActive})=>isActive? "text-primary": location.pathname==='/'? "text-white": "text-text2"}>Statistics</NavLink>
                <NavLink to="/dashboard" className={({isActive})=>isActive? "text-primary": location.pathname==='/'? "text-white": "text-text2"}>Dashboard</NavLink>
            </div>
            <div className="flex justify-end items-center gap-2 sm:gap-4">
                <Link className={"btn btn-circle btn-xs sm:btn-sm xl:btn-md bg-white sm:text-xl lg:text-2xl text-text2"}>
                    <AiOutlineShoppingCart />
                </Link>
                <Link className={"btn btn-circle btn-xs sm:btn-sm xl:btn-md bg-white sm:text-xl lg:text-2xl text-text2"}>
                    <CiHeart />
                </Link>
            </div>
        </div>
    );
};

export default NavBar;