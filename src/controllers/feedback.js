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
  
  import { firestore } from '../credentials';

  export async function createComment(data) {
    const commentsCollection = collection(firestore, 'comentarios');
    const commentsDoc = await addDoc(commentsCollection, data);
  
    const comments = { id: commentsDoc.id, ...data };
  
    return comments;
  }