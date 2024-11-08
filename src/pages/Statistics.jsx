import { useEffect } from "react";


const Statistics = () => {
    const pageTitle = 'Statistics | Gadget-Heaven';
    useEffect(() => {
        document.title = pageTitle;
    }, [])
    return (
        <div>
            <div className="h-28"></div>
            STATISTICS
        </div>
    );
};

export default Statistics;