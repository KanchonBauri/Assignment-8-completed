import Heading from "../components/Heading";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    

    return (
        <div>
            <div className="h-28"></div>
            <div className="bg-primary pb-8">
                <Heading title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <NavLink to="/dashboard/cart"
                            className={({isActive})=>isActive?
                                "bg-white text-primary font-bold rounded-full outline-none px-16 py-4 border border-white text-lg":
                                    location.pathname==='/dashboard'?
                                        "bg-white text-primary font-bold rounded-full outline-none px-16 py-4 border border-white text-lg":
                                "text-white bg-primary rounded-full outline-none px-16 py-4 border border-white text-lg"}>
                        <button>Cart</button>
                    </NavLink>
                    <NavLink to="/dashboard/wishlist"
                            className={({isActive})=>isActive?
                                "bg-white text-primary font-bold rounded-full outline-none px-16 py-4 border border-white text-lg":
                                "text-white rounded-full outline-none px-16 py-4 border border-white text-lg"}>
                        <button>Wishlist</button>
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