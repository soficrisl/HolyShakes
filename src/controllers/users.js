import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
  } from 'firebase/firestore';
import { firestore } from "../credentials";

export async function getUsers() {
    const usersCollection = collection(firestore, 'usuarios');
    const usersDocs = await getDocs(usersCollection);
    const users = usersDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
    return users;
}