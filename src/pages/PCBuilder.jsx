import { AiOutlineShoppingCart } from "react-icons/ai";
import Heading from "../components/Heading";


const PCBuilder = () => {
    return (
        <div>
            <div className="bg-primary">
                <Heading title={'PC Builder'} subtitle={'Welcome to PC Builder! Here you can build your own PC from scratch. Choose items as you like and combine. If you need help, just contact us and we will guide you.'}></Heading>
            </div>
            <div className="w-10/12 mx-auto mb-12">
                <div className="py-8 mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <h3 className="text-text1 font-bold text-lg sm:text-xl">Total Cost: $ 0.00</h3>
                    <button className="p-3 flex flex-col items-center bg-primary text-white rounded-3xl">
                        <AiOutlineShoppingCart />
                        <p className="text-[0.5rem] font-thin">Add to Cart</p>
                    </button>
                </div>
                <div className="px-3 py-1 bg-text2 flex justify-between items-center">
                    <div className="bg-white border-2 border-text1 p-2 text-text1">
                        <p>Estimated Power Consumption 0W</p>
                    </div>
                    <button className="text-white">
                        <i className="fa-solid fa-rotate"></i>
                    </button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-microchip fa-2xl"></i>
                        <span>CPU</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-memory fa-2xl"></i>
                        <span>RAM</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-hard-drive fa-2xl"></i>
                        <span>HDD</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-keyboard fa-2xl"></i>
                        <span>Keyboard</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-computer-mouse fa-2xl"></i>
                        <span>Mouse</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-desktop fa-2xl"></i>
                        <span>Monitor</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-fan fa-2xl"></i>
                        <span>Cooling Fan</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-compact-disc fa-2xl"></i>
                        <span>Optical Device</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="pr-3 pl-4 py-4 bg-white text-text1 border border-gray-300 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-headphones fa-2xl"></i>
                        <span>Sound System</span>
                    </div>
                    <button className="text-text2 text-xs px-2 py-1 rounded-xl border border-text2">Select</button>
                </div>
                <div className="px-3 py-2 bg-white text-text2 border border-gray-300">
                    <select name="" id="" className="w-2/12 text-xs p-1 border-2 border-text2">
                        <option value="0">Select Other Components</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PCBuilder;