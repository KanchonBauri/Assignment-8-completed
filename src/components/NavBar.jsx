import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getOldCart, getOldWishlist } from "../utilities";


const NavBar = () => {

    const [cartBadge, setCartBadge] = useState(null);
    const [wishlistBadge, setWishlistBadge] = useState(null);

    useEffect(() => {
        const cart = getOldCart();
        setCartBadge(cart.length);
        const wishlist = getOldWishlist();
        setWishlistBadge(wishlist.length);
    }, [])

    const navClass = () => {
        if (location.pathname === '/' || location.pathname === '/Laptops' || location.pathname === '/Phones' || location.pathname === '/Accessories' || location.pathname === '/Smart-Watches' || location.pathname === '/Smart-TVs') {
            return "text-white";
        }
        else {
            return "text-text2";
        }
    }

    const [navClassName, setNavClassName] = useState(null);

    useEffect(()=>{
        const dynamicClass = navClass();
        setNavClassName(dynamicClass);
    },[location.pathname])

    return (
        <>
            <div className="py-2 sm:py-3"></div>
            <div className={`mx-2 sm:mx-8 py-4 ${location.pathname === '/' || location.pathname === '/Laptops' || location.pathname === '/Phones' || location.pathname === '/Accessories' || location.pathname === '/Smart-Watches' || location.pathname === '/Smart-TVs' ? "bg-primary rounded-t-3xl" : ""}`}>
                <div className="flex justify-between items-center w-11/12 sm:w-10/12 mx-auto">
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
                                    <NavLink to="/" className={({ isActive }) => isActive || location.pathname==='/' || location.pathname==='/Laptops' || location.pathname==='/Phones' || location.pathname==='/Accessories' || location.pathname==='/Smart-Watches' || location.pathname==='/Smart-TVs' ? "text-white underline" : "text-text2"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-primary" : navClassName}>Statistics</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary" : navClassName}>Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pc-builder" className={({ isActive }) => isActive ? "text-primary" : navClassName}>PC Builder</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className={`sm:text-xl lg:text-2xl font-extrabold ${location.pathname === '/' || location.pathname === '/Laptops' || location.pathname === '/Phones' || location.pathname === '/Accessories' || location.pathname === '/Smart-Watches' || location.pathname === '/Smart-TVs'  ? "text-white" : "text-text1"}`}>
                            Gadget Heaven
                        </Link>
                    </div>
                    <div className="navbar-center hidden sm:flex gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
                        <NavLink to="/" className={({ isActive }) => isActive || location.pathname==='/' || location.pathname==='/Laptops' || location.pathname==='/Phones' || location.pathname==='/Accessories' || location.pathname==='/Smart-Watches' || location.pathname==='/Smart-TVs' ? "text-white underline" : "text-text2"}>Home</NavLink>
                        <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-primary" : navClassName}>Statistics</NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary" : navClassName}>Dashboard</NavLink>
                        <NavLink to="/pc-builder" className={({ isActive }) => isActive ? "text-primary" : navClassName}>PC Builder</NavLink>
                    </div>
                    <div className="flex justify-end items-center gap-2 md:gap-4">
                        <Link to="/dashboard/cart" className={"btn btn-circle border border-fullBg outline-none btn-xs sm:btn-sm xl:btn-md bg-white sm:text-xl lg:text-2xl text-text2 relative"}>
                            <AiOutlineShoppingCart />
                            <div className={`absolute -top-2 -right-2 w-min py-1 px-3 rounded-full text-red-500 text-sm bg-white/40 ${!cartBadge || cartBadge === 0 ? "hidden" : ""}`}>{cartBadge}</div>
                        </Link>
                        <Link to="/dashboard/wishlist" className={"btn btn-circle border border-fullBg outline-none btn-xs sm:btn-sm xl:btn-md bg-white sm:text-xl lg:text-2xl text-text2 relative"}>
                            <CiHeart />
                            <div className={`absolute -top-2 -right-2 w-min py-1 px-3 rounded-full text-red-500 text-sm bg-white/40 ${!wishlistBadge || wishlistBadge===0 ? "hidden": ""}`}>{wishlistBadge}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;