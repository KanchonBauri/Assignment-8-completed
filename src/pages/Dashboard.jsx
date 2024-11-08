import { useEffect } from "react";
import Heading from "../components/Heading";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    const pageTitle = 'Dashboard | Gadget-Heaven';
    useEffect(()=>{
        document.title = pageTitle;
    },[])

    return (
        <div>
            <div className="bg-primary pb-8">
                <Heading title={'Dashboard'} subtitle={'Here you can see the items you have added to your Cart or as your favourite. Just click the Purchase button to complete your purchase. Happy Shopping!'}></Heading>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <NavLink to="/dashboard/cart"
                            className={({isActive})=>isActive?
                                "bg-white text-primary font-bold rounded-full outline-none px-16 py-4 border border-white text-lg":
                                    location.pathname==='/dashboard'?
                                        "bg-white text-primary font-bold rounded-full outline-none px-16 py-4 border border-white text-lg":
                                "text-white bg-primary rounded-full outline-none px-16 py-4 border border-white text-lg"}>
                        <button className="outline-none">Cart</button>
                    </NavLink>
                    <NavLink to="/dashboard/wishlist"
                            className={({isActive})=>isActive?
                                "bg-white text-primary font-bold rounded-full outline-none px-16 py-4 border border-white text-lg":
                                "text-white rounded-full outline-none px-16 py-4 border border-white text-lg"}>
                        <button className="outline-none">Wishlist</button>
                    </NavLink>
                </div>
            </div>
            <div className="my-12 w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;