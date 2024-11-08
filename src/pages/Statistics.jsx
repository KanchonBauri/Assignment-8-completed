import { useEffect } from "react";
import Heading from "../components/Heading";


const Statistics = () => {
    const pageTitle = 'Statistics | Gadget-Heaven';
    useEffect(() => {
        document.title = pageTitle;
    }, [])
    return (
        <div>
            <div className="bg-primary">
                <Heading title={'Statistics'} subtitle={'Check out the stats of our products based on their price and ratings'}></Heading>
            </div>
            <div className="w-10/12 py-8 mx-auto"><h3 className="text-text1 font-bold text-lg sm:text-xl">Statistics</h3></div>
            
        </div>
    );
};

export default Statistics;