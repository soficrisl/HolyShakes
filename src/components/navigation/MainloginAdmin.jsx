import Google from '../../assets/Google.webp' ;
import Facebook from '../../assets/facebook.png' ;
import appFirebase from "../../credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Mainlogin = () => {

    const funcAutentication = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password);
    };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b font-montserrat">
                <main className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 my-20">
                    <h1 className="text-2xl text-teal-600 dark:text-teal-400 mb-6 self-center">INICIAR SESIÓN ADMINISTRADOR</h1>
                    <form className="w-full space-y-4" onSubmit={funcAutentication}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Correo</label>
                            <input type="email" id="email" placeholder="Ingresa tu correo electrónico" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Contraseña</label>
                            <input type="password" id="password" placeholder="Ingresa tu contraseña" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" />
                        </div>
                        <button type="submit" className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600">Ingresar</button>
                        <button type="button" className="w-full py-2 bg-white text-black border border-zinc-300 rounded-md shadow-sm flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600">
                            <img src={Google} alt="Google Icon" className="mr-2" />
                            Continuar con Google
                        </button>
                        <button type="button" className="w-full py-2 bg-white text-black border border-zinc-300 rounded-md shadow-sm flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600">
                            <img src={Facebook} alt="Facebook Icon" className="mr-2" />
                            Continuar con Facebook
                        </button>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Mainlogin;
