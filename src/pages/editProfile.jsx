import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar";
import "../styles.css"
import UserPropertie from "../components/navigation/userPropertie";
import noProfile from "../assets/noprofile.webp"
function EditProfile() {
    return (
    <>  
        <div className = "min-w-full h-full bg-gradient-circle">
            <Navbar/>
            <div className="w-full h-full flex flex-col my-12 gap-3"> 
                <h2 className="uppercase text-3xl self-center font-bold mb-1 tracking-widest text-orangehs">PERFIL</h2>
                <div className = "w-full self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-0 flex flex-col">
                    <div className="self-center my-4 w-1/2 lg:w-1/4 xl:w-1/3 md:w-1/3 sm:w-1/3 ">
                        <button className="">
                            <img src = {noProfile} className="h-full w-full border rounded-full self-center hover:border-2 hover:border-orangehs"></img>
                        </button>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-2 m-2 gap-4 self-center"> 
                        <UserPropertie category ="Nombre" place_holder = "Jonh"/>
                        <UserPropertie category ="Apellido" place_holder = "Doe"/>
                        <UserPropertie category =" Teléfono" place_holder = "04244006954"/>
                        <UserPropertie category ="Correo" place_holder = "s@correo.unimet.edu.ve"/>
                        <UserPropertie category ="Contraseña" place_holder= "s@correo.unimet.edu.ve"/>
                    </div>
                    <div className="my-4 w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 self-center"> 
                        <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 text-bold">
                            <a href = "/userProfile"> Confirmar </a></button>
                    </div> 
                </div> 
            </div>
            <Footer/>
        </div>
    </>
    ); 
}

export default EditProfile

