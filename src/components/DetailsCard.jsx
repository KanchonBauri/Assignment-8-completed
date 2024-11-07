import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishlist, getOldWishlist } from "../utilities";



const DetailsCard = ({ data }) => {
    
    const { id } = useParams();

    const [gadget, setGadget] = useState({});
    const { product_image, product_title, price, description, Specifications, availability, rating, warranty} = gadget;

    const [added, setAdded] = useState(null);

    useEffect(() => {
        const clickedGadget = data.find(product => product.product_id === id);
        setGadget(clickedGadget);
        const wishlist = getOldWishlist();
        const exists = wishlist?.find(item => item.product_id === gadget.product_id);
        if (exists) {
            setAdded(true);
        }
        else {
            setAdded(false);
        }
    }, [ data, id, added ])

    const handleAddToCart = (gadget) => {
        addToCart(gadget);
    };
    
    const handleAddToWishlist = (gadget) => {
        addToWishlist(gadget);
        setAdded(true);
    };

    return (
        <div className="w-9/12 mx-auto bg-white/20 border-2 border-white max-sm:p-4 p-6 rounded-3xl absolute -top-[40vw] min-[340px]:-top-[30vw] min-[440px]:-top-[25vw] min-[540px]:-top-[20vw] md:-top-[15vw] min-[1440px]:-top-[13vw] inset-x-0">
            <div className="flex flex-col items-center lg:flex-row gap-6 bg-white rounded-3xl">
                <figure className="lg:w-1/2 max-sm:p-4 p-6 rounded-3xl">
                    <img
                        className="rounded-3xl w-full"
                        src={product_image}
                        alt='product_image' />
                </figure>
                <div className="card-body max-sm:p-4">
                    <h2 className="card-title">{product_title}</h2>
                    <p className="text-text2 sm:text-xl font-semibold">Price: $ {price}</p>
                    <div className={`text-sm w-max border rounded-full px-4 py-2 my-2 ${availability? "text-green-600 border-green-600 bg-green-200": "text-red-600 border-red-600 bg-red-200"}`}>
                        {
                            availability? 'In Stock': 'Out of Stock'
                        }
                    </div>
                    <p className="text-text2 mb-2 sm:text-lg">{description}</p>
                    <h4 className="text-text1 font-semibold min-[350px]:text-lg">Specifications:</h4>
                    {
                        Specifications?.map(spec => (
                            <li key={spec} className="text-text2 sm:text-lg">{spec}</li>
                        ))
                    }
                    <h4 className="text-text1 font-semibold min-[350px]:text-lg mt-2 flex items-center gap-1">
                        <span>Rating</span>
                        <span>⭐</span>
                    </h4>
                    <div className="flex items-center gap-3">
                        {<Rating rating={rating}></Rating>}
                        <span className="py-2 px-3 rounded-3xl bg-fullBg text-text1 text-sm">{rating}</span>
                    </div>
                    <p className="text-text1 font-semibold min-[380px]text-lg mt-2">Warranty: {warranty}</p>
                    <div className="flex items-center gap-4 mt-4">
                        <button onClick={() => handleAddToCart(gadget)} className="flex flex-col min-[450px]:flex-row items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary text-white font-semibold text-sm sm:text-base hover:text-primary hover:bg-white border border-primary outline-none">
                            <span>Add To Cart</span>
                            <span><i className="fa-solid fa-cart-shopping sm:fa-lg"></i></span>
                        </button>
                        <button disabled={added} onClick={()=>handleAddToWishlist(gadget)} className={"btn btn-circle border border-fullBg btn-sm sm:btn-md bg-white sm:text-xl lg:text-2xl text-text2"}>
                            <CiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;