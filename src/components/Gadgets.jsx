import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "./GadgetCard";


const Gadgets = () => {
    
    const { category } = useParams();
    const [gadgets, setGadgets] = useState([]);
    const gadgetsData = useLoaderData();

    useEffect(()=>{
        if (category) {
            let filteredGadgets = [...gadgetsData].filter(gadget => gadget.category === category);
            setGadgets(filteredGadgets);
        }
        else {
            setGadgets(gadgetsData);
        }
    }, [category])
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                gadgets.length?
                gadgets.map(gadget => <GadgetCard key={gadget.product_id} gadget={gadget}></GadgetCard>):
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
                    <h2 className="text-text2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">No Data Found</h2>
                </div>
            }
        </div>
    );
};

export default Gadgets;