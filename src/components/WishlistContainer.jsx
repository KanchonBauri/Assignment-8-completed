import { useLoaderData } from "react-router-dom";


const WishlistContainer = () => {

    const data = useLoaderData();

    return (
        <div>
            <h3 className="text-text1 font-bold text-lg sm:text-xl">Wishlist</h3>
            <div>

            </div>
        </div>
    );
};

export default WishlistContainer;