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
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

function UserProfile() {
    const [usuario, setUsuario] = useState(null);
    const [uid, setUid] = useState(null);
    const [photoURL, setPhotoURL] = useState (noProfile); 


    useEffect(() => {
      const db = getFirestore(app_firebase);
      const auth = getAuth(app_firebase);
      const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
          if (usuarioFirebase) {
              const docRef = doc(db, 'users', usuarioFirebase.uid);
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

    return (
    <> 
        <div className = "min-w-full h-full bg-gradient-circle">
            <Navbar/>
            <div className="w-full h-full flex flex-col my-12 gap-3"> 
                <h2 className="uppercase text-3xl self-center m-4 font-bold mb-1 tracking-widest text-orangehs">PERFIL</h2>
                <div className="w-full self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-0 flex flex-col justify-center">
                    <div className="self-center  w-64 h-64 p-2 ">
                        <img src = {photoURL} className=" w-full h-full object-cover border-2 rounded-full self-center border-orangehs"></img>
                    </div>
                    <div className="flex flex-col w-1/2 p-2 m-2 gap-4">
                        <ShowPropertie category ="Nombre" info = {usuario? usuario.fname : ""}/>
                        <ShowPropertie category ="Apellido" info = {usuario? usuario.lname : ""}/>
                        <ShowPropertie category ="Correo" info = {usuario? usuario.email : ""}/>
                    </div>
                    <div className = "m-4 flex flex-col gap-4"> 
                        <Link to= "/editProfile">
                            <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 text-bold">
                                Editar 
                            </button> </Link> 
                    </div> 
                </div>
            </div>
            <Footer/>
        </div>
    </>
    ); 
}

export default UserProfile 

