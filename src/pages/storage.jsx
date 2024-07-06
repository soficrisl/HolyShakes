import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";

export async function upload(file, currentUser) {
    const storage = getStorage(); 
    const fileRef = ref(storage, currentUser.iud + '.png' ); 
    const snapshot = await uploadBytes(fileRef, file); 
    const photoURL = await getDownloadURL(fileRef); 
    updateProfile(currentUser, {photoURL}); 
    console.log("Cambiado"); 
    return photoURL
}


