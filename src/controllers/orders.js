import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    query, 
    where,
    updateDoc,
  } from 'firebase/firestore';
import { firestore } from "../credentials";

export async function createProduct(data) {
    
}

export async function deleteOrder(id) {  }

export async function getOrders() {
    const productsCollection = collection(firestore, 'pedidos');
    const productsDocs = await getDocs(productsCollection);
    const products = productsDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
    return products;
}

export async function getOrdersByField(field,value) {
    const productsCollection = collection(firestore, 'pedidos');
    const q = query(productsCollection, where(field, '==', value));
    const productsDocs = await getDocs(q);
    const products = productsDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
    return products;
}

export async function getProductsOrders() {
    const orders = await getOrders();
    return orders.map(order => order.productos);
}
export async function getSumTotal() {
    const orders = await getOrders();
    return orders.reduce((sum, order) => sum + order["subtotal"], 0);
}

export async function getEarns() {
    const orders = await getOrders();
    return orders.reduce((sum, order) => sum + order["subtotal"]*0.77, 0);
}


export async function getCountProductsOrders() {
    const data = await getProductsOrders();
    let sum = 0;
    data.forEach(item => {
        const value = Object.values(item)[0]; // Assuming each object has only one key-value pair
        sum += value;
    });
    return sum
}

export async function getPost(id) {
    const postsCollection = collection(db, 'pedidos');
    const postRef = doc(postsCollection, id);
    const postDoc = await getDoc(postRef);
  
    const post = { id: postDoc.id, ...postDoc.data() };
  
    return post;
  }

  export async function updatePost(id, data) {
    const postsCollection = collection(db, 'pedidos');
    const postRef = doc(postsCollection, id);
    await updateDoc(postRef, data);
  }

  export async function getOrdersDays() {
    const orders = await getOrders();
    return orders.map(order => order.fecha);


}
