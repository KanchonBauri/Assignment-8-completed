import { useEffect, useState } from "react";
import { getOldCart, removeFromCart } from "../utilities";


const CartContainer = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalCost , setTotalCost] = useState(0.00);
    
    useEffect(() => {
        const cart = getOldCart();
        setCartItems(cart);
        const currentTotalCost = cart?.reduce((prev, curr) => prev + curr.price,0);
        setTotalCost(currentTotalCost);
    },[])

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
        const cart = getOldCart();
        setCartItems(cart);
        const currentTotalCost = cart?.reduce((prev, curr) => prev + curr.price, 0);
        setTotalCost(currentTotalCost);
    }

    return (
        <>
            <div className="pb-8 flex flex-col min-[400px]:flex-row justify-between items-center gap-8 sm:gap-0 min-[400px]:items-start md:items-center">
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
            <div>
                {
                    cartItems?
                    cartItems.map((item, idx) => (
                        <div key={idx} className="my-6 p-6 bg-white rounded-xl flex flex-col md:flex-row items-center gap-6">
                            <figure className="rounded-xl md:w-4/12 lg:w-3/12">
                                <img className="rounded-xl w-full" src={item.product_image} alt="Gadget_image" />
                            </figure>
                            <div className="text-center md:text-start">
                                <h4 className="text-text1 text-2xl font-bold text-center md:text-start">{item.product_title}</h4>
                                <p className="text-text2 py-6 md:py-2 lg:py-4 xl:py-6">{item.description}</p>
                                <p className="text-lg font-semibold">Price: $ {item.price}</p>
                            </div>
                            <div className="md:flex-grow"></div>
                            <div>
                                <button
                                onClick={()=>handleRemoveFromCart(idx)}
                                className="btn btn-circle text-red-600 border border-red-600">
                                    <i className="fa-solid fa-xmark fa-xl"></i>
                                </button>
                            </div>
                        </div>
                    )):
                    <p className="text-text2 font-bold text-2xl text-center">No Item Added in Cart</p>
                }
            </div>
        </>
    );
};

export default CartContainer;