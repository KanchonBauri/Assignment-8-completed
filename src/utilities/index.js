import { toast } from "react-toastify";

// Get all gadgets from local storage
const getOldCart = () => {
    const oldCartStr = localStorage.getItem('cart');
    if (oldCartStr) {
        const oldCart = JSON.parse(oldCartStr);
        return oldCart;
    }
    else {
        return [];
    }
}
const getOldWishlist = () => {
    const oldWishlistStr = localStorage.getItem('wishlist');
    if (oldWishlistStr) {
        const oldWishlist = JSON.parse(oldWishlistStr);
        return oldWishlist;
    }
    else {
        return [];
    }
}
// Add a gadget to local storage
const addToCart = (gadget) => {
    const cart = getOldCart();
    cart.push(gadget);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.info(`1 ${gadget.product_title} is added to Cart`, {
        position: "top-center"
    });
}
const addToWishlist = (gadget) => {
    const wishlist = getOldWishlist();
    const exists = wishlist?.find(item => item.product_id === gadget.id);
    if (exists) {
        return toast.error('This item already added in your Wishlist', {
            position:"top-center"
        })
    }
    wishlist.push(gadget);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success(`${gadget.product_title} is added to your Wishlist`, {
        position: "top-center"
    });
}

// Remove a gadget from local storage
const removeFromWishlist = (id) => {
    const wishlist = getOldWishlist();
    const remaining = wishlist?.filter(item => item.product_id !== id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    toast.warning('Item Removed from Wishlist', {
        position: "top-center"
    });
}




export { getOldCart, addToCart, getOldWishlist, addToWishlist, removeFromWishlist }