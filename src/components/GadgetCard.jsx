import { useNavigate } from "react-router-dom";


const GadgetCard = ({gadget}) => {
    const {product_image, product_title, price, product_id} = gadget;
    const navigate = useNavigate();
    return (
        <div className="max-w-[450px] p-4 rounded-xl space-y-4 bg-white shadow-lg flex flex-col items-center">
            <figure className="rounded-xl">
                <img className="w-full h-[28vh] rounded-xl" src={product_image} alt={`${product_title}_image`} />
            </figure>
            <h3 className="text-text1 font-semibold text-2xl">{product_title}</h3>
            <p className="text-text2 text-xl">{`Price: ${price}$`}</p>
            <div>
                <button onClick={()=>navigate(`/gadget/${product_id}`)} className="px-4 py-2 rounded-full text-primary border border-primary font-semibold sm:text-lg outline-none hover:bg-primary hover:text-white">View Details</button>
            </div>
        </div>
    );
};

export default GadgetCard;