import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-text1 font-bold mb-12 text-center w-10/12 mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Explore Cutting-Edge Gadgets</h2>
            <div className="w-10/12 mx-auto mb-24 flex flex-col items-center sm:flex-row sm:items-start md:justify-around lg:justify-normal gap-6">
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;