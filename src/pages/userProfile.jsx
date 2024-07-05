import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar";
import "../styles.css"
import UserPropertie from "../components/navigation/userPropertie";
import ShowPropertie from "../components/navigation/showProperties";
import noProfile from "../assets/noprofile.webp"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app_firebase from "../credentials";
import { Link } from "react-router-dom";

function UserProfile() {
    const [usuario, setUsuario] = useState(null);
    const [uid, setUid] = useState(null);
    const [photoURL, setPhotoURL] = useState (noProfile); 

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
/** 
      useEffect(() => {
        setPhotoURL(usuario.photoURL)
      },[usuario])
    */
    return (
    <> 
        <div className = "min-w-full h-full bg-gradient-circle">
            <Navbar/>
            <div className="w-full h-full flex flex-col my-12 gap-3"> 
                <h2 className="uppercase text-3xl self-center m-4 font-bold mb-1 tracking-widest text-orangehs">PERFIL</h2>
                <div className="w-full self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-0 flex flex-col">
                    <div className="self-center  w-1/2 p-2 lg:w-1/4 xl:w-1/3 md:w-1/3 sm:w-1/3 ">
                        <img src = {photoURL} className="h-full w-full border-2 rounded-full self-center border-orangehs"></img>
                    </div>
                    <div className="flex flex-col w-1/2 p-2 m-2 gap-4"> 
                        <ShowPropertie category ="Nombre" info = {usuario? usuario.fname : ""}/>
                        <ShowPropertie category ="Apellido" info = {usuario? usuario.lname : ""}/>
                        <ShowPropertie category =" Teléfono" info = {usuario? usuario.phone : ""}/>
                        <ShowPropertie category ="Correo" info = {usuario? usuario.email : ""}/>
                    </div>
                    <div className = "m-4 flex flex-col gap-4"> 
                        <Link to= "/editProfile">
                            <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 text-bold">
                                Editar 
                            </button> </Link> 
                            <button className="w-full py-2 bg-aquahs text-black rounded-md shadow-sm hover:bg-aqua-darker text-bold underline"> Ver historial de pedidos </button>
                    </div> 
                </div>
            </div>
            <Footer/>
        </div>
    </>
    ); 
}

export default UserProfile 

