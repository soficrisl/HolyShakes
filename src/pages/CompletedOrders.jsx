import ChangeOrders from "../components/ChangeOrders"
import UserCompleted from "../components/UserCompleted";
import { useState,useEffect } from "react"
import { getUsersOrders } from "../controllers/products";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import NavbarAdmin from "../components/navigation/NavbarAdmin";

export default function CompletedOrders() {
    
    const [pendingOrders, setPendingOrders] = useState([]);
    
    useEffect(() => {getUsersOrders().then( (data)=>{ setPendingOrders(data)} )}, [])
    

    return (
        <div>
            <NavbarAdmin></NavbarAdmin>
            <ChangeOrders/>
            <div className="p-2 py-4 sm:py-8 gap-y-4 px-8 flex flex-col h-auto min-h-screen justify-center items-center font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl">
            {pendingOrders.map((order, index) => (
                <div>
                    <UserCompleted key={index} order={order} />
                </div>
            ))}
            
            </div>
            <Footer></Footer>
        </div>
    )
}
