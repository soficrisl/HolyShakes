import ChangeOrders from "../components/ChangeOrders"
import { useState,useEffect } from "react"
import UserPending from "../components/UserPending";
import { getUsersProducts } from "../controllers/products";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import NavbarAdmin from "../components/navigation/NavbarAdmin";

export default function PendingOrders() {
    const [pendingOrders, setPendingOrders] = useState([]);
    
    useEffect(() => {getUsersProducts().then( (data)=>{ setPendingOrders(data)} )}, [])

    return (
        <>
        <NavbarAdmin></NavbarAdmin>
        <ChangeOrders/>
        <div className="p-2 py-4 sm:py-8 gap-y-4 px-8 flex flex-col h-auto min-h-screen justify-center items-center font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl">
                {pendingOrders.map((order, index) => (
                <div>
                    <UserPending key={index} order={order} />
                </div>
            ))}
        </div>
        <Footer></Footer>
        </>
    )
}
