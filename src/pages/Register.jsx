import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Google from "../assets/Google.webp";
import image from "../assets/landing/image.png";
import appFirebase from "../credentials";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
import "../styles.css";
const auth = getAuth(appFirebase);

function Register() {
  const firestore = getFirestore(appFirebase);

  const googleAutentication = async() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  const funcCreate = async (e) => {
    e.preventDefault();

    const rol = "Cliente";
    const fname = e.target.Fname.value;
    const lname = e.target.Lname.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkpassword = e.target.checkpassword.value;
    if (password == checkpassword) {
      const infoUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((usuarioFirebase) => {
        return usuarioFirebase;
      });
      console.log(infoUsuario);
      const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
      setDoc(docuRef, {
        email: email,
        rol: rol,
        fname: fname,
        lname: lname,
        phone: phone,
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex place-content-evenly flex-col items-center gap-4 w-full h-full bg-gradient-circle ">
        <h2 className="text-center text-4xl mt-4 uppercase tracking-widest text-orangehs">
          {" "}
          Regístrate{" "}
        </h2>
        <div className="  m-6 mt-0 pl-36 pr-36 pt-4 pb-4 self-center border bg-slate-50 rounded -md shadow-lg backdrop-filter backdrop-blur-sm relative bg-opacity-10 flex flex-col ">
          <div className="content-center align-middle font-montserrat">
            <form
              className="p-1 m-1 mb-2 w-72 flex flex-col gap-4"
              onSubmit={funcCreate}
            >
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {" "}
                  Nombre{" "}
                </label>
                <input
                  id="Fname"
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {" "}
                  Apellido{" "}
                </label>
                <input
                  id="Lname"
                  placeholder="Enter your last name"
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                />
              </div>
              <div>
                <div className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {" "}
                  Teléfono{" "}
                </div>
                <input
                  id="phone"
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <div className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {" "}
                  Correo{" "}
                </div>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {" "}
                  Contraseña{" "}
                </div>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <div className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  {" "}
                  Confirmar Contraseña{" "}
                </div>
                <input
                  type="password"
                  id="checkpassword"
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                  placeholder="Enter same password"
                />
              </div>
              <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600">
                {" "}
                Registrar
              </button>
              <button onClick={googleAutentication} className="w-full py-2 bg-white text-black border border-zinc-300 rounded-md shadow-sm flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600">
                <div className="flex place-content-evenly">
                  <img src={Google} alt="Google Icon" className="mr-2" />
                  Continuar con Google
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
