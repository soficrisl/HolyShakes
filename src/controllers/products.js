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

import {getProductsOrders, getOrders} from '../controllers/orders'
import dayjs from 'dayjs';
import "dayjs/locale/es";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';// If you need to use isSameOrBefore
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';// If you need to use isSameOrAfter
import { toDimension } from 'chart.js/helpers';
import { get } from 'firebase/database';

dayjs.extend(isSameOrBefore); 
dayjs.extend(isSameOrAfter); 

export async function createProduct(data) {
    const productsCollection = collection(firestore, 'productos');
    await addDoc(productsCollection, data);
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
    const postsCollection = collection(firestore, 'productos');
    const postRef = doc(postsCollection, id);
    const postDoc = await getDoc(postRef);
  
    const post = { id: postDoc.id, ...postDoc.data() };
  
    return post;
  }

  export async function updateProducts(id, data) {
    const postsCollection = collection(firestore, 'productos');
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
        //console.log(array_frequency);
        if (array_category == array_frequency){
            //console.log(array_category == array_frequency);
            if(result.has(map1[i][array_category])){
                let currentValue = result.get(map1[i][array_category]);
                result.set(map1[i][array_category],currentValue + map2[j][array_frequency]);
            }else{
                result.set(map1[i][array_category], map2[j][array_frequency]);
                }
            }
        }
    }
    if (!result.has("Bedida")) {
        result.set("Bedida", 0);
    }

    if (!result.has("Salado")) {
        result.set("Salado", 0);
    }
    if (!result.has("Dulce")) {
        result.set("Dulce", 0);
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
export async function getProductsDay() {


    const products = await getProductsCategory();
    const orders = await getOrders();
    
    let array_day = [];
    // [{value: 10, label: 'Bedida' },{value: 10, label: 'Comida' }]
    const today = dayjs();
    
    const filteredOrders = orders.filter(order => dayjs(order.fecha,'YYYY-MM-DD').startOf("day").isSame(dayjs(today).startOf("day"), "day"));
        
        //importante
        const productsOrders = filteredOrders.map(order => order.productos).flat();
        
        const filteredProducts = mergeMapsByKey(products,productsOrders);
        
        const productsObject ={};

        filteredProducts.forEach((value, key) => {
            productsObject[key] = value;
          })

        const transformedProducts = Object.entries(productsObject).forEach(([label, _quantity]) => {
            array_day.push({
                value: _quantity, // Assuming you want to set this value statically to 10
                label: label,
                color: getColorForLabel(label)
              });
            });
    return array_day;

}

function getColorForLabel(label) {
    let hash = 0;
    for (let i = 0; i < label.length; i++) {
      hash = label.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  }

export async function getProductsWeek() {
    const products = await getProductsCategory();
    const orders = await getOrders();
    let array_day = [];
    //console.log(orders);
    //console.log(products);
    array_day = getProductsDate(7, 'day', "dddd", orders, products, array_day);
    array_day = transformData(array_day);
    return array_day;
}

export async function getProductsMonth() {
    const products = await getProductsCategory();
    const orders = await getOrders();
    let array_day = [];
    //console.log(orders);
    //console.log(products);
    array_day = getProductsDate(6, 'month', "MMM", orders, products, array_day);
    array_day = transformData(array_day);
    return array_day;
}

function transformData(input) {
  const data = {
    labels: [],
    datasets: []
  };

  const categories = {
    Dulce: [],
    Salado: [],
    Bebida: []
  };

  input.forEach(item => {
    data.labels.push(item.day);
    Object.keys(categories).forEach(category => {
      categories[category].push(item[category] || 0);
    });
  });

  Object.keys(categories).forEach((category, index) => {
    data.datasets.push({
      label: category,
      data: categories[category],
      stack: 1,
      borderWidth: 1
    });
  });

  return data;
}

function getProductsDate(index, unit, unit_format, orders, products, array_day){
    for (let i = 0; i < index; i++){
        
        const today = dayjs();
        const week = today.subtract(i, unit );
        const filteredOrders = orders.filter(order => dayjs(order.fecha,'YYYY-MM-DD').startOf(unit).isSame(dayjs(week).startOf(unit), unit));
        
        //importante
        const productsOrders = filteredOrders.map(order => order.productos).flat();
        
        const filteredProducts = mergeMapsByKey(products,productsOrders);
        filteredProducts.set(unit, week.format(unit_format))
        const productsObject ={};
        filteredProducts.forEach((value, key) => {
            productsObject[key] = value;
          })
        array_day.push(productsObject );
    }
    return array_day;
}