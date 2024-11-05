

const Footer = () => {
    return (
        <div className="bg-white p-8 md:p-16 lg:p-24 xl:p-28">
            <div className="text-center">
                <h3 className="text-text1 font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">Gadget Heaven</h3>
                <p className="text-text2 pt-4">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className="my-4 sm:my-8"/>
            <div className="sm:px-8 md:px-16 lg:px-36 xl:px-52 2xl:px-96 flex flex-col sm:flex-row justify-between items-center sm:items-start">
                <div className="text-center">
                    <h6 className="text-text1 text-lg font-bold pb-4">Services</h6>
                    <ul className="text-text2 font-light">
                        <a href=""><li>Product Support</li></a>
                        <a href=""><li>Order Tracking</li></a>
                        <a href=""><li>Shipping & Delivery</li></a>
                        <a href=""><li>Returns</li></a>
                    </ul>
                </div>
                <div className="text-center">
                    <h6 className="text-text1 text-lg font-bold pb-4">Company</h6>
                    <ul className="text-text2 font-light">
                        <a href=""><li>About Us</li></a>
                        <a href=""><li>Careers</li></a>
                        <a href=""><li>Contact</li></a>
                    </ul>
                </div>
                <div className="text-center">
                    <h6 className="text-text1 text-lg font-bold pb-4">Legal</h6>
                    <ul className="text-text2 font-light">
                        <a href=""><li>Terms of Service</li></a>
                        <a href=""><li>Privacy Policy</li></a>
                        <a href=""><li>Cookie Policy</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;