import Navbar from "../components/navigation/Navbar"; 
import Footer from "../components/navigation/Footer";
import Google from "../assets/Google.webp"; 


function Register() {
  return (
    <>
    <Navbar/>
    <div className="flex place-content-evenly flex-col items-center gap-4 bg-creamhs"> 
    <h2 className = "text-center text-4xl p-8 mt-4 uppercase tracking-widest text-orangehs"> Registrate </h2>
    <div className="  m-6 mt-0 pl-36 pr-36 pt-4 pb-4 self-center border bg-slate-50 rounded -md shadow-lg backdrop-filter backdrop-blur-sm relative bg-opacity-50 flex flex-col "> 
            <div className="content-center align-middle font-montserrat"> 
                <div className="p-1 m-1 mb-2 w-72 flex flex-col gap-4"> 
                    <div>
                        <div className="font-bold"> Nombre </div>
                        <input name = "Fname" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your first name"/> 
                    </div>
                    <div>
                        <div className="font-bold"> Apellido </div>
                        <input name = "Lname"  placeholder="Enter your last name" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border'/> 
                    </div>
                    <div> 
                        <div className="font-bold">  Telefono </div>
                        <input name = "phone" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your phone number"/> 
                    </div>
                    <div>
                        <div className="font-bold">  Correo </div>
                        <input type= "email" name = "mail"  className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your email"/> 
                    </div>
                    <div> 
                        < div className="font-bold">  Contraseña </div>
                        <input name ="password"  className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter password"/> 
                    </div>
                    <div> 
                        <div className="font-bold">  Confirmar Contraseña </div>
                        <input name ="checkpassword" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border'placeholder="Enter same password" /> 
                    </div>
                    <button className ="p-3 w-full  bg-aquahs self-center rounded-2xl font-bold hover:bg-aqua-darker"> Registrar</button>
                    <button className ="p-3 w-full bg-white self-center rounded-2xl font-bold text-gray-600 hover:bg-slate-50">
                    <div className="flex place-content-evenly"> 
                    <img src={ Google } alt="Google Icon" className="mr-2" />
                        Continuar con Google
                    </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    
)

}

export default Register