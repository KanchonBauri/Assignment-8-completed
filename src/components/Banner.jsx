import BannerImg from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="bg-primary text-white rounded-xl mt-4 mx-4 sm:mt-8 sm:mx-8 pt-32 pb-32 sm:pb-40 lg:pb-48 xl:pb-56 2xl:pb-64 relative">
            <div className="text-center flex flex-col items-center gap-6">
                <h1 className="text-white font-extrabold w-10/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug">Upgrade Your Tech & Accessorize with<br/>Gadget Heaven Accessories</h1>
                <p className="text-white font-extralight w-10/12 sm:w-8/12 lg:w-6/12 text-sm sm:text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="text-primary bg-white px-8 py-4 rounded-full font-bold sm:text-lg md:text-xl">Shop Now</button>
            </div>
            <div className="w-9/12 mx-auto bg-white/20 border-2 border-white p-6 rounded-xl absolute -bottom-[30vw] inset-x-0">
                <img className="w-full h-[38vw] rounded-xl" src={BannerImg} alt="huge_gadget" />
            </div>
        </div>
    );
};

export default Banner;