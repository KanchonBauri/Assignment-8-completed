import { useLoaderData } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Heading from "../components/Heading";


const ProductDetails = () => {

    const data = useLoaderData();


    return (
        <div>
            <div className="bg-primary pb-32 sm:pb-40 lg:pb-48 xl:pb-56 2xl:pb-64">
                <Heading title={'Product Details'} subtitle={'Check out all the features of the product. You add to your Cart or add as your favourite for later. Happy Exploring!'}></Heading>
            </div>
            <div className="relative min-h-[900px] min-[300px]:min-h-[860px] min-[400px]:min-h-[800px] sm:min-h-[960px] md:min-h-[1050px] lg:min-h-[690px]">
                <DetailsCard data={data}></DetailsCard>
            </div>
        </div>
    );
};

export default ProductDetails;