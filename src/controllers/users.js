import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    query, where,
    getDocs,
    setDoc,
    updateDoc,
    QuerySnapshot,
  } from 'firebase/firestore';
import { firestore } from "../credentials";

export async function getUsers() {
    const usersCollection = collection(firestore, 'usuarios');
    const usersDocs = await getDocs(usersCollection);
    const users = usersDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
    return users;
}

export async function getUserByEmail(email) {
  const usersCollection = collection(firestore, 'usuarios');
  const querySnapshot = await getDocs(query(usersCollection, where('email', '==', email)));
  // console.log(querySnapshot);
  const users = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
  return users[0];
}