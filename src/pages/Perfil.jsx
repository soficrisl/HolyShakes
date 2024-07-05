import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app_firebase from "../credentials";

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [uid, setUid] = useState(null);

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
      setUid(usuario.uid);
    }
  }, [usuario]);

  return <div>Hola, {uid}</div>;
}

export default Perfil;
