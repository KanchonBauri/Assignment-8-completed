import { useEffect, useState } from "react";
import { addToCart, getOldWishlist, removeFromWishlist } from "../utilities";



const WishlistContainer = () => {

    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const wishlist = getOldWishlist();
        setWishlistItems(wishlist);
    }, [])

    const handleRemoveFromWishlist = (id) => {
        removeFromWishlist(id);
        const wishlist = getOldWishlist();
        setWishlistItems(wishlist);
    }

    const handleAddToCartFromWishlist = (gadget,id) => {
        addToCart(gadget);
        handleRemoveFromWishlist(id);
    };

    return (
        <div>
            <h3 className="text-text1 font-bold text-lg sm:text-xl">Wishlist</h3>
            <div>
                {
                    wishlistItems.length ?
                        wishlistItems.map((item, idx) => (
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
                                <div className="flex justify-center items-center md:flex-col md:items-end gap-4">
                                    <button onClick={() => handleAddToCartFromWishlist(item, item.product_id)} className="btn btn-circle bg-primary text-white hover:text-primary hover:bg-white border border-primary outline-none">
                                        <i className="fa-solid fa-cart-shopping sm:fa-xl"></i>
                                    </button>
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item.product_id)}
                                        className="outline-none btn btn-circle text-red-600 border border-red-600">
                                        <i className="fa-solid fa-xmark fa-xl"></i>
                                    </button>
                                </div>
                            </div>
                        )) :
                        <p className="my-6 text-text2 font-bold text-2xl text-center">No Item Added in Wishlist</p>
                }
            </div>
        </div>
    );
};

export default WishlistContainer;