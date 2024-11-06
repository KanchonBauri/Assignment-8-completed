import { useLoaderData } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Heading from "../components/Heading";


const ProductDetails = () => {

    const data = useLoaderData();


    return (
        <div>
            <div className="h-28"></div>
            <div className="bg-primary mx-auto pb-32 sm:pb-40 lg:pb-48 xl:pb-56 2xl:pb-64">
                <Heading title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
            </div>
            <div className="relative min-h-[100vh]">
                <DetailsCard data={data}></DetailsCard>
            </div>
        </div>
    );
};

export default ProductDetails;