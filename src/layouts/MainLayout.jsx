import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const MainLayout = () => {
    const location = useLocation();
    return (
        <>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-557px)]"><Outlet></Outlet></div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;