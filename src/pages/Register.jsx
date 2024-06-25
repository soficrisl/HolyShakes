import Navbar from "../components/navigation/Navbar"; 
import Footer from "../components/navigation/Footer";
import Google from "../assets/Google.webp"; 
import image from "../assets/landing/image.png"
import appFirebase from "../credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../styles.css"

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
        <div className= "min-h-screen flex-col">
            <Navbar />
            <div className="flex place-content-evenly flex-col items-center gap-4 w-full h-full bg-gradient-circle ">
                <h2 className="text-center text-4xl mt-4 uppercase tracking-widest text-orangehs">Registrate</h2>
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl m-6 mt-0 p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg backdrop-filter backdrop-blur-sm flex flex-col">
                    <form className="w-full space-y-4 font-montserrat" onSubmit={funcCreate}>
                        <div>
                            <label /*value = {values.name} onChange={handleChange} onBlur = {handleBlur}*/
                            htmlFor="Fname" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">Nombre</label>
                            <input id="Fname" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" placeholder="Enter your first name" />
                            <span className = "text-sm text-red-600"> El nombre debe tener entre 2-16 letras</span>
                        </div>
                        <div>
                            <label /*value = {values.name} onChange={handleChange} onBlur = {handleBlur}*/
                            htmlFor="Lname" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">Apellido</label>
                            <input id="Lname" placeholder="Enter your last name" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" />
                            <span className = "text-sm text-red-600"> El apellido debe tener entre 2-16 letras</span>
                        </div>
                        <div>
                            <label /*value = {values.name} onChange={handleChange} onBlur = {handleBlur}*/
                            htmlFor="phone" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">Telefono</label>
                            <input id="phone" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" placeholder="Enter your phone number" />
                            <span className = "text-sm text-red-600"> El telefono debe tener entre 8-15 numeros</span>
                        </div>
                        <div>
                            <label /*value = {values.name} onChange={handleChange} onBlur = {handleBlur}*/
                            htmlFor="email" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">Correo</label>
                            <input type="email" id="email" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" placeholder="Enter your email" />
                            <span className = "text-sm text-red-600"> El correo debe ser Unimet </span>
                        </div>
                        <div>
                            <label /*value = {values.name} onChange={handleChange} onBlur = {handleBlur}*/
                             htmlFor="password" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">Contraseña</label>
                            <input id="password" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" placeholder="Enter password" />
                            <span className = "text-sm text-red-600"> Al menos 5 caracteres </span>
                        </div>
                        <div>
                            <label /*value = {values.name} onChange={handleChange} onBlur = {handleBlur}*/
                             htmlFor="checkpassword" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">Confirmar Contraseña</label>
                            <input id="checkpassword" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" placeholder="Enter same password" />
                            <span className = "text-sm text-red-600" > Las contraseñas deben ser iguales </span>
                        </div>
                        <button type="submit" className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600">Registrar</button>
                        <button type="button" className="w-full py-2 bg-white text-black border border-zinc-300 rounded-md shadow-sm flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600">
                            <img src={Google} alt="Google Icon" className="mr-2" />
                            Continuar con Google
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex-end">
            <Footer/>
            </div>
            
        </div>
    );
}


export default Register