import { useEffect, useState } from "react";
import { getOldCart, removeFromCart } from "../utilities";
import { useNavigate } from "react-router-dom";
import purchaseImg from "../assets/Group.png"


const CartContainer = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0.00);
    const [dummyTotal, setDummyTotal] = useState(0.00);
    const navigate = useNavigate();

    useEffect(() => {
        const cart = getOldCart();
        setCartItems(cart);
        const currentTotalCost = cart?.reduce((prev, curr) => prev + curr.price, 0);
        setTotalCost(currentTotalCost);
        setDummyTotal(currentTotalCost);
    }, [])

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
        const cart = getOldCart();
        setCartItems(cart);
        const currentTotalCost = cart?.reduce((prev, curr) => prev + curr.price, 0);
        setTotalCost(currentTotalCost);
        setDummyTotal(currentTotalCost);
    }

    const handleSort = () => {
        const sorted = [...cartItems].sort((a, b) => {
            return (b.price - a.price)
        })
        setCartItems(sorted);
    }

    const handlePurchase = () => {
        document.getElementById('purchase_modal').showModal()
        localStorage.removeItem('cart');
        const cart = getOldCart();
        setCartItems(cart);
        setTotalCost(0);        
    }

    const handleModalClose = () => {
        setTimeout(() => {
            navigate('/');
        }, 500);
    }

    return (
        <>
            <div className="pb-8 flex flex-col min-[400px]:flex-row justify-between items-center gap-8 sm:gap-0 min-[400px]:items-start md:items-center">
                <h3 className="text-text1 font-bold text-xl">Cart</h3>
                <div className="flex flex-col md:flex-row justify-end items-center min-[500px]:items-end md:items-center gap-4">
                    <h3 className="text-text1 font-bold text-lg sm:text-xl">
                        Total Cost: $ {parseFloat(totalCost).toFixed(2)}
                    </h3>
                    <div className="flex flex-col min-[500px]:flex-row max-[450px]:justify-center justify-end items-center gap-3">
                        <button onClick={handleSort} className="outline-none px-6 py-3 bg-white text-primary sm:font-semibold rounded-full border border-primary hover:bg-primary hover:text-white">
                            <span>Sort by Price </span>
                            <span className="hidden sm:contents"><i className="fa-solid fa-arrow-down-9-1"></i></span>
                        </button>
                        <button disabled={cartItems.length === 0? true: false} onClick={handlePurchase}
                            className="outline-none px-6 py-3 bg-primary text-white rounded-full border border-primary hover:bg-white hover:text-primary">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {
                    cartItems.length ?
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
                                        onClick={() => handleRemoveFromCart(idx)}
                                        className="outline-none btn btn-circle text-red-600 border border-red-600">
                                        <i className="fa-solid fa-xmark fa-xl"></i>
                                    </button>
                                </div>
                            </div>
                        )) :
                        <p className="my-6 text-text2 font-bold text-2xl text-center">No Item Added in Cart</p>
                }
            </div>
            
                {/* Open the modal using document.getElementById('ID').showModal() method */ }
                
                <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-center">
                        <div className="flex justify-center"><img src={purchaseImg} alt="" /></div>
                        <h3 className="font-bold text-lg py-4">Payment Successful!</h3>
                        <hr/>
                        <p className="py-4">Thank You for Purchasing.</p>
                        <p className="pb-4">Total Cost: $ {dummyTotal}</p>
                        <div className="flex justify-center">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleModalClose} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            
        </>
    );
};

export default CartContainer;