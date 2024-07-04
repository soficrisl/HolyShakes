import { useState,useEffect } from "react"
import {Link, useLocation} from "react-router-dom"

export default function ChangeOrders() {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState("");
    
    useEffect(() => {
        // Step 3: Extract the pathname and update state accordingly
        const path = location.pathname.replace('/', ''); // Assuming your paths are like '/pendingorders'
        setCurrentPage(path);
    }, [location]);
    
    return (
        <div className="h-[80px] w-auto flex text-md sm:text-lg md:text-xl lg:text-2xl">
            <div className={`bg-aquahs flex flex-grow justify-center items-center ${currentPage === 'pendingorders' ? 'font-bold' : ''}`}>
                <Link to="/pendingorders" onClick={() => setCurrentPage("pendingorders")} >EN CURSO</Link>
            </div>
            <div className={`bg-custom-yellow flex flex-grow justify-center items-center ${currentPage === 'completedorders' ? 'font-bold' : ''}`}>
                
                <Link to="/completedorders" onClick={() => setCurrentPage("completedorders")}>PAGADAS</Link>
            </div>
        </div>
    )
}
