import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Google from "../assets/Google.webp";
import appFirebase from "../credentials";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import "../styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_firebase from "../credentials";

const auth = getAuth(appFirebase);

function Register() {
  const firestore = getFirestore(appFirebase);

  const [errors, setErrors] = useState({});

  const googleAutentication = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const funcCreate = async (e) => {
    e.preventDefault();

    const rol = "Cliente";
    const fname = e.target.Fname.value.trim();
    const lname = e.target.Lname.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const checkpassword = e.target.checkpassword.value.trim();

    const newErrors = {};

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@correo\.unimet\.edu\.ve$/; // Solo acepta correos de la unimet
    const phoneRegex = /^[0-9]+$/;

    // Validaciones de campos
    if (!fname || !nameRegex.test(fname)) {
      newErrors.fname = "Nombre inválido o vacío";
    }

    if (!lname || !nameRegex.test(lname)) {
      newErrors.lname = "Apellido inválido o vacío";
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Correo electrónico debe ser @correo.unimet.edu.ve";
    }

    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Número de teléfono inválido o vacío";
    }

    if (!password) {
      newErrors.password = "Contraseña vacía";
    }

    if (password !== checkpassword) {
      newErrors.checkpassword = "Las contraseñas no coinciden";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si no hay errores, procede a crear el usuario
    try {
      const infoUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((usuarioFirebase) => {
        return usuarioFirebase;
      });
      const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
      setDoc(docuRef, {
        email: email,
        rol: rol,
        fname: fname,
        lname: lname,
        phone: phone,
      });
      console.log(infoUsuario);
    } catch (error) {
      alert("Este Correo ya se encuentra registrado");
    }


  };
  const navigate = useNavigate();
  const auth = getAuth(app_firebase);
  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        navigate("/");
      }
    });
  }, [auth])
  return (
    <>
      <Navbar />
      <div className="flex place-content-evenly flex-col items-center gap-4 w-full h-full bg-gradient-circle">
        <h2 className="text-center text-4xl mt-4 uppercase tracking-widest text-orangehs">
          Regístrate
        </h2>
        <div className="m-6 mt-0 pl-36 pr-36 pt-4 pb-4 self-center border bg-slate-50 rounded-md shadow-lg backdrop-filter backdrop-blur-sm relative bg-opacity-10 flex flex-col">
          <div className="content-center align-middle font-montserrat">
            <form
              className="p-1 m-1 mb-2 w-72 flex flex-col gap-4"
              onSubmit={funcCreate}
            >
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Nombre
                </label>
                <input
                  id="Fname"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.fname ? "border-red-500" : "border-zinc-300"
                  } dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                  placeholder="Enter your first name"
                />
                {errors.fname && (
                  <p className="text-red-500 text-xs mt-1">{errors.fname}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Apellido
                </label>
                <input
                  id="Lname"
                  placeholder="Enter your last name"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.lname ? "border-red-500" : "border-zinc-300"
                  } dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                />
                {errors.lname && (
                  <p className="text-red-500 text-xs mt-1">{errors.lname}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Teléfono
                </label>
                <input
                  id="phone"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.phone ? "border-red-500" : "border-zinc-300"
                  } dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.email ? "border-red-500" : "border-zinc-300"
                  } dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.password ? "border-red-500" : "border-zinc-300"
                  } dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="checkpassword"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.checkpassword ? "border-red-500" : "border-zinc-300"
                  } dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                  placeholder="Enter same password"
                />
                {errors.checkpassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.checkpassword}</p>
                )}
              </div>
              <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600">
                Registrar
              </button>
              <button
                type="button"
                onClick={googleAutentication}
                className="w-full py-2 bg-white text-black border border-zinc-300 rounded-md shadow-sm flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600"
              >
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
