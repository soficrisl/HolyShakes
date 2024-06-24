import Navbar from "../components/navigation/Navbar"; 
import Footer from "../components/navigation/Footer";
import Google from "../assets/Google.webp"; 
import image from "../assets/landing/image.png"
import appFirebase from "../credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase)

const funcCreate = async(e) =>{
    e.preventDefault();

    const fname = e.target.Fname.value;
    const lname = e.target.Lname.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkpassword = e.target.checkpassword.value;
    if (password == checkpassword){
        createUserWithEmailAndPassword(auth, email, password);
    }
  }

function Register() {
  return (
    <>
    <Navbar/>
    <div className="flex place-content-evenly flex-col items-center gap-4 w-full h-full bg-cover" style ={{backgroundImage: `url('${image}')`}}> 
    <h2 className = "text-center text-4xl p-8 mt-4 uppercase tracking-widest text-orangehs"> Registrate </h2>
    <div className="  m-6 mt-0 pl-36 pr-36 pt-4 pb-4 self-center border bg-slate-50 rounded -md shadow-lg backdrop-filter backdrop-blur-sm relative bg-opacity-10 flex flex-col "> 
            <div className="content-center align-middle font-montserrat"> 
                <form className="p-1 m-1 mb-2 w-72 flex flex-col gap-4" onSubmit={funcCreate}> 
                    <div>
                        <div className="font-bold"> Nombre </div>
                        <input id = "Fname" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your first name"/> 
                    </div>
                    <div>
                        <div className="font-bold"> Apellido </div>
                        <input id = "Lname"  placeholder="Enter your last name" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border'/> 
                    </div>
                    <div> 
                        <div className="font-bold">  Telefono </div>
                        <input id = "phone" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your phone number"/> 
                    </div>
                    <div>
                        <div className="font-bold">  Correo </div>
                        <input type= "email" id = "email"  className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your email"/> 
                    </div>
                    <div> 
                        < div className="font-bold">  Contraseña </div>
                        <input id ="password"  className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter password"/> 
                    </div>
                    <div> 
                        <div className="font-bold">  Confirmar Contraseña </div>
                        <input id ="checkpassword" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border'placeholder="Enter same password" /> 
                    </div>
                    <button className ="p-3 w-full  bg-aquahs self-center rounded-2xl font-bold hover:bg-aqua-darker"> Registrar</button>
                    <button className ="p-3 w-full bg-white self-center rounded-2xl font-bold text-gray-600 hover:bg-slate-50">
                    <div className="flex place-content-evenly"> 
                    <img src={ Google } alt="Google Icon" className="mr-2" />
                        Continuar con Google
                    </div>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    
)

}

export default Register