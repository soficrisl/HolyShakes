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

import {getProductsOrders} from '../controllers/orders'
import dayjs from 'dayjs';

export async function createProduct(data) {
    
}

export async function deleteProduct(id) {  }

export async function getProducts() {
    const productsCollection = collection(firestore, 'productos');
    const productsDocs = await getDocs(productsCollection);
    const products = productsDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
    return products;
}

export async function getProductsCategory() {
    const products = await getProducts();
  
    return products.map((doc) => ({
        [doc.id]: doc.categoria,
      }));
}

export async function getProductsId(id) {
    const postsCollection = collection(db, 'productos');
    const postRef = doc(postsCollection, id);
    const postDoc = await getDoc(postRef);
  
    const post = { id: postDoc.id, ...postDoc.data() };
  
    return post;
  }

  export async function updateProducts(id, data) {
    const postsCollection = collection(db, 'productos');
    const postRef = doc(postsCollection, id);
    await updateDoc(postRef, data);
  }

  function mergeMapsByKey(map1, map2){
    const result = new Map();
    // Merge entries from map1
    let array_category
    let array_frequency
    for (let i = 0; i < map1.length; i++){
        array_category = Object.keys(map1[i])[0];
        //console.log(array_category);
        for (let j = 0; j < map2.length; j++){
        array_frequency = Object.keys(map2[j])[0];
        if (array_category == array_frequency){
        if(result.has(array_category)){
            result.set(map1[i][array_category],result[array_category] + map2[j][array_frequency]);
        }else{
            result.set(map1[i][array_category], map2[j][array_frequency]);
        }
        }
        }
    }
    return result;    
}


export async function getCategoryFrequency(){
    const array = await getProductsCategory();
    const array2 = await getProductsOrders();
    const flattenedArray2 = array2.flat();

    //console.log(array);
    //console.log(flattenedArray2);

    return mergeMapsByKey(array,flattenedArray2);
}

export async function getProductosByDay() {


    
}