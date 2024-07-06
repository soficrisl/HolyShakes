import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar";
import "../styles.css"
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import UserPropertie from "../components/navigation/userPropertie";
import noProfile from "../assets/noprofile.webp"
import { getAuth, onAuthStateChanged, updateProfile, updateEmail, } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app_firebase from "../credentials";
import { Link } from "react-router-dom"
import {upload} from "./storage"


function EditProfile() {
    const [usuario, setUsuario] = useState(null);
    const [uid, setUid] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);  
    const [photoURL, setPhotoURL] = useState (noProfile); 
    const [errors, setErrors] = useState({});
    const [isDisabled,setDisabled] = useState(true); 
    const db = getFirestore(app_firebase);
    useEffect(() => {
        const auth = getAuth(app_firebase);
        const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
            if (usuarioFirebase) {
                const docRef = doc(db, 'usuarios', usuarioFirebase.uid);
                console.log(docRef)
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setUsuario({ ...usuarioFirebase, ...userData });
                } else {
                    setUsuario(usuarioFirebase);
                }
            } else {
                setUsuario(null);
            }
        });
        return () => unsubscribe();
    },);


      useEffect(() => {
        if (usuario != null) {
          setUid(usuario.uid)
          if (usuario.photoURL != null) {
            setPhotoURL(usuario.photoURL);
          }
         
        }
      }, [usuario]);

      function newPhoto(e) {
        debugger 
        console.log(e.target.files[0])
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
      }

      async function handleClick () {
        console.log("a.")
        setLoading(true); 
        try {
            const photo2 = await upload(photo, usuario); 
            setPhotoURL(photo2)
        } catch {
            console.log("error")
        } 
        setLoading(false); 
      }

      
    const editPropertie = () => {
        if (isDisabled) {
            setDisabled(false)
        }else {
            setDisabled(true)
        }

    } 

    const funcCreate = async (e) => {
        e.preventDefault();
        const fname = e.target.Fname.value.trim();
        const lname = e.target.Lname.value.trim();
        const email = e.target.email.value.trim();
    
        const newErrors = {};
    
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@correo\.unimet\.edu\.ve$/; // Solo acepta correos de la unimet
    
    
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
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
        await setDoc (doc(db, 'users', usuario.uid, ), {fname, lname, email})
        setDisabled(true)
    }

    

    return (
    <>  
        <div className = "min-w-full h-full bg-gradient-circle">
            <Navbar/>
            <div className="w-full h-full flex flex-col my-12 gap-3"> 
                <h2 className="uppercase text-3xl self-center font-bold mb-1 tracking-widest text-orangehs">PERFIL</h2>
                <div className = "w-full self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-0 flex flex-col">
                    <div className="my-4 flex flex-col justify-center font-montserrat gap-4">
                        <div className="self-center w-64 h-64 justify-center"  >
                            <img src = {photoURL} className="h-full w-full object-cover border-2 rounded-full border-orangehs"></img>
                        </div>
                        <div className="flex justify-center gap-4"> 
                            <button className = "text-3xl hover:text-4xl" onClick= {editPropertie} > <ion-icon name="create-outline"></ion-icon></button>
                            <button disabled={loading} className="w-1/4 py-2 self-center bg-aquahs text-white rounded-md shadow-sm hover:bg-orange-600 text-bold " onClick={handleClick} href = "/editProfile"> Cambiar </button>
                        </div>
                        
                        <input type="file" className="bg-white w-full p-2 lg:w-1/4 xl:w-1/3 md:w-1/3 sm:w-1/3 self-center " onChange={newPhoto}/>
                    </div>
                    <form className="flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-2 m-2 gap-4 self-center" onSubmit={funcCreate} > 
                        <div className="flex flex-col font-montserrat w-full "> 
                            <h3 className="font-bold"> Nombre </h3>
                            <div className="flex gap-2"> 
                            <input  
                                id="Fname" disabled = {isDisabled} className={`block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" ${
                                    errors.fname ? "border-red-500" : "border-zinc-300"} dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                                defaultValue={usuario? usuario.fname : ""} />{errors.fname && (<p className="text-red-500 text-xs mt-1">{errors.fname}</p>)}
                            </div>
                        </div>
                        <div className="flex flex-col font-montserrat w-full "> 
                            <h3 className="font-bold"> Apellido </h3>
                            <div className="flex gap-2"> 
                            <input  
                                id="Lname"  disabled = {isDisabled} className={`block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" ${
                                    errors.lname ? "border-red-500" : "border-zinc-300"} dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                                defaultValue={usuario? usuario.lname : ""} />{errors.lname && (<p className="text-red-500 text-xs mt-1">{errors.lname}</p>)}
                            </div>
                        </div>
                        <div className="flex flex-col font-montserrat w-full "> 
                            <h3 className="font-bold"> Correo </h3>
                            <div className="flex gap-2"> 
                            <input   
                                id="email"  disabled = {isDisabled} className={`block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" ${
                                    errors.email ? "border-red-500" : "border-zinc-300"} dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
                                defaultValue={usuario? usuario.email : ""} />{errors.email && (<p className="text-red-500 text-xs mt-1">{errors.email}</p>)}
                            </div>
                        </div>
                        <div> 
                            <button  className="w-full py-2 px-2 bg-aquahs text-white rounded-md shadow-sm hover:bg-orange-600 text-bold"> Confirmar </button>
                        </div>
                    </form>
                    <div className="my-4 w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 self-center mt-6"> 
                    <Link to = "/profile">
                        <button className="w-full py-2 bg-orangehs text-white rounded-md shadow-sm hover:bg-orange-600 text-bold"> Volver </button> </Link>
                    </div> 
                </div> 
            </div>
            <Footer/>
        </div>
    </>
    ); 
}

export default EditProfile

