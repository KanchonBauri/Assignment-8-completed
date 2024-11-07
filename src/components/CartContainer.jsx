import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const CartContainer = () => {

    const data = useLoaderData();

    const [totalCost , setTotalCost] = useState(0.00);

    return (
        <div>
            <div className="flex flex-col min-[400px]:flex-row justify-between items-center gap-8 sm:gap-0 min-[400px]:items-start md:items-center">
                <h3 className="text-text1 font-bold text-xl">Cart</h3>
                <div className="flex flex-col md:flex-row justify-end items-center min-[500px]:items-end md:items-center gap-4">
                    <h3 className="text-text1 font-bold text-lg sm:text-xl">
                        Total Cost: $ {totalCost}
                    </h3>
                    <div className="flex flex-col min-[500px]:flex-row max-[450px]:justify-center justify-end items-center gap-3">
                        <button className="px-6 py-3 bg-white text-primary sm:font-semibold rounded-full border border-primary hover:bg-primary hover:text-white">
                            <span>Sort by Price</span>
                            <span className="hidden sm:contents"></span>
                        </button>
                        <button className="px-6 py-3 bg-primary text-white rounded-full border border-primary hover:text-lg">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;