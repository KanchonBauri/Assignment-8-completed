

const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center py-8">
            <h2 className="text-white font-bold w-10/12 mx-auto pb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{title}</h2>
            <p className="text-white font-extralight mx-auto w-10/12 sm:w-8/12 lg:w-6/12 text-sm sm:text-base">{subtitle}</p>
        </div>
    );
};

export default Heading;