import { Link } from "react-router-dom";


const Categories = ({categories}) => {
    
    return (
        <div className="p-6 bg-white rounded-lg grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-1 gap-6">
            <Link to="/">
                <button className={`w-full p-4 rounded-full outline-none ${location.pathname === '/' ? "text-white bg-primary font-bold" : "text-text2 bg-fullBg hover:text-white hover:bg-primary"}`}>All</button>
            </Link>
            {
                categories?.map(category => (
                    <Link key={category.category_name} to={`/${category.category_name}`}>
                        <button className={`w-full p-4 rounded-full outline-none ${location.pathname === `/${category.category_name}` ? "text-white bg-primary font-bold" : "text-text2 bg-fullBg hover:text-white hover:bg-primary"}`}>{category.category_name}</button>
                    </Link>
                ))
            }
        </div>
    );
};

export default Categories;