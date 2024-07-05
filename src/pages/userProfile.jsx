import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar";
import "../styles.css"
import UserPropertie from "../components/navigation/userPropertie";
import ShowPropertie from "../components/navigation/showProperties";
import noProfile from "../assets/noprofile.webp"

function userProfile() {
    return (
    <>  
        <div className = "min-w-full h-full bg-gradient-circle">
            <Navbar/>
            <div className="w-full h-full flex flex-col my-12 gap-3"> 
                <h2 className="uppercase text-3xl self-center m-4 font-bold mb-1 tracking-widest text-orangehs">PERFIL</h2>
                <div className="w-full self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-0 flex flex-col">
                    <div className="self-center  w-1/2 p-2 lg:w-1/4 xl:w-1/3 md:w-1/3 sm:w-1/3 ">
                        <img src = {noProfile} className="h-full w-full border-2 rounded-full self-center hover:border-orangehs"></img>
                    </div>
                    <div className="flex flex-col w-1/2 p-2 m-2 gap-4"> 
                        <ShowPropertie category ="Nombre" info = "Jonh"/>
                        <ShowPropertie category ="Apellido" info = "Doe"/>
                        <ShowPropertie category =" Teléfono" info = "04244006954"/>
                        <ShowPropertie category ="Correo" info = "s@correo.unimet.edu.ve"/>
                        <ShowPropertie category ="Contraseña" info = "s@correo.unimet.edu.ve"/>
                    </div>
                    <div className = "m-4 flex flex-col gap-4"> 
                            <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 text-bold">
                                <a href = "/editProfile"> Editar </a>
                            </button>
                            <button className="w-full py-2 bg-aquahs text-black rounded-md shadow-sm hover:bg-aqua-darker text-bold underline"> Ver historial de pedidos </button>
                    </div> 
                </div>
            </div>
            <Footer/>
        </div>
    </>
    ); 
}

export default userProfile 

