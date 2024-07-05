import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar";
import "../styles.css"
import UserPropertie from "../components/navigation/userPropertie";
import noProfile from "../assets/noprofile.webp"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app_firebase from "../credentials";
import { Link } from "react-router-dom";


function EditProfile() {
    const [usuario, setUsuario] = useState(null);
    const [uid, setUid] = useState(null);
    const [photoURL, setPhotoURL] = useState (noProfile); 
    const [edit, editable] = useState(false);

    useEffect(() => {
        const auth = getAuth(app_firebase);
        onAuthStateChanged(auth, (usuarioFirebase) => {
          if (usuarioFirebase) {
            setUsuario(usuarioFirebase);
          } else {
            setUsuario(null);
          }
        });
      }, []);

      useEffect(() => {
        if (usuario != null) {
          setUid(usuario.uid)
          setPhotoURL(usuario.photoURL);
        }
      }, [usuario]);
    return (
    <>  
        <div className = "min-w-full h-full bg-gradient-circle">
            <Navbar/>
            <div className="w-full h-full flex flex-col my-12 gap-3"> 
                <h2 className="uppercase text-3xl self-center font-bold mb-1 tracking-widest text-orangehs">PERFIL</h2>
                <div className = "w-full self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-0 flex flex-col">
                    <div className="my-4 flex justify-center">
                        <button className="self-center">
                            <img src = {photoURL} className="h-full w-full border rounded-full hover:border-2 hover:border-orangehs"></img>
                        </button>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-2 m-2 gap-4 self-center"> 

                        <></>
                        <UserPropertie category ="Nombre" place_holder = {usuario? usuario.fname : ""} />
                        <UserPropertie category ="Apellido" place_holder = {usuario? usuario.lname : ""}/>
                        <UserPropertie category =" Teléfono" place_holder = {usuario? usuario.phone : ""}/>
                        <UserPropertie category ="Correo" place_holder = {usuario? usuario.mail : ""}/>
                    </div>
                    <div className="my-4 w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 self-center"> 
                    <Link to = "/profile">
                        <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 text-bold">
                            Confirmar </button> </Link>
                    </div> 
                </div> 
            </div>
            <Footer/>
        </div>
    </>
    ); 
}

export default EditProfile

