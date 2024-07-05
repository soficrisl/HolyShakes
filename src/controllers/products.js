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
import {getUsers} from "../controllers/users"
import dayjs from 'dayjs';
import "dayjs/locale/es";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';// If you need to use isSameOrBefore
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';// If you need to use isSameOrAfter


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

  function mergeMapsByKey(productsCounts, productsNames){
    const result = {};
    
    productsNames.forEach(categoryObj => {
      const categoryName = Object.values(categoryObj)[0]; // Assuming each object has only one key-value pair
      result[categoryName] = 0;
    });

    productsCounts.forEach(countObj => {
      Object.keys(countObj).forEach(productId => {
          // Find the product name using the product ID
          const productNameObj = productsNames.find(nameObj => nameObj[productId]);
          if (productNameObj) {
              const productName = productNameObj[productId];
              // Add or update the count for the product name in the result
              if (result[productName]) {
                  result[productName] += countObj[productId];
              } else {
                  result[productName] = countObj[productId];
              }
          }
      });
  });

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
        

        // console.log(productsOrders);
        // console.log(products);

        const filteredProducts = mergeMapsByKey(productsOrders,products);
        
        console.log(filteredProducts);
        
        const labels = Object.keys(filteredProducts);
        const data = Object.values(filteredProducts);
        const backgroundColor = ['blue', 'red', 'orange']

        const transformed = {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColor
            }
          ]
        };

    return transformed;

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
    array_day = transformData(array_day,"day");
    return array_day;
}

export async function getProductsMonth() {
    const products = await getProductsCategory();
    const orders = await getOrders();
    let array_day = [];
    // console.log(orders);
    // console.log(products);
    array_day = getProductsDate(6, 'month', "MMM", orders, products, array_day);
    console.log(array_day);
    array_day = transformData(array_day,"month");

    return array_day;
}

function transformData(input,mode) {
  const data = {
    labels: [],
    datasets: []
  };

  const firstObject = input[0];

// Step 2 & 3: Get the keys and filter out 'month'
  const categories = transformDataToEmptyArrays(input);

  input.forEach(item => {
    data.labels.push(item[mode]);
    Object.keys(categories).forEach(category => {
   
      if (item.hasOwnProperty(category)) {
        categories[category].push(item[category]);
      }
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
function transformDataToEmptyArrays(input) {
  // Initialize the result object
  const result = {};

  // Check if input is not empty and has at least one object
  if (input.length > 0) {
    const firstObject = input[0];

    // Extract keys excluding 'month'
    const keys = Object.keys(firstObject).filter(key => key !== 'month' && key !== 'day');

    // Iterate over keys and initialize each with an empty array in the result object
    keys.forEach(key => {
      result[key] = [];
    });
  }

  return result;
}

function getProductsDate(index, unit, unit_format, orders, products, array_day){
    for (let i = 0; i < index; i++){
        //ve si la fecha concide con la fecha actual
        const today = dayjs();
        const week = today.subtract(i, unit );
        const filteredOrders = orders.filter(order => dayjs(order.fecha,'YYYY-MM-DD').startOf(unit).isSame(dayjs(week).startOf(unit), unit));
        
        //importante
        let filteredProducts = {};
        if(filteredOrders != undefined){
          
          const productsOrders = filteredOrders.map(order => order.productos[0]);
        
          
          filteredProducts = mergeMapsByKey(productsOrders,products);
            
        }else{
          filteredProducts = mergeMapsByKey([],products);
        }
        
        filteredProducts[unit]=week.format(unit_format)
        //convierte en objeto
        const productsObject ={};
        /* filteredProducts.forEach((value, key) => {
            productsObject[key] = value;
          }) */
        array_day.push(filteredProducts );
    }
    console.log(array_day);
    return array_day;
}

export async function getUsersProducts(){
  const orders = await getOrders()
  const filteredOrders = orders.filter(order => order.pagado === false);
  const products = await getProducts()
  const users = await getUsers()

  const transformData = (orders, products, users) => {
    return orders.map(order => {
      const user = users.find(user => user.id === order.id_usuario);
      const userName = user ? user.fname + " " + user.lname : "Unknown User";
  
      const formattedProducts = order.productos.flatMap(productEntry => {
        return Object.entries(productEntry).map(([productId, quantity]) => {
          const product = products.find(p => p.id === productId);
          return product ? { name: product.descripcion, quantity, price: product.precio } : null;
        }).filter(p => p); // Remove nulls if product not found
      });
  
      return {
        nombre: userName,
        productos: formattedProducts,
        id_pedido: order.id
      };
    });
  };
  
  // Example usage
  const finalOutput = transformData(filteredOrders, products, users);
  return finalOutput;
}

export async function getUsersOrders(){
  // Assuming the given datasets are stored in variables: orders, products, and users
  const orders = await getOrders()
  const filteredOrders = orders.filter(order => order.pagado === true);
  const products = await getProducts()
  const users = await getUsers()
  
  const transformData = (orders, products, users) => {
  return orders.map(order => {
    const user = users.find(user => user.id === order.id_usuario);
    const userName = user ? user.fname + " " + user.lname : "Unknown User";
    
    
    const formattedProducts = order.productos.flatMap(productEntry => {
      return Object.entries(productEntry).map(([productId, quantity]) => {
        const product = products.find(p => p.id === productId);
        return product ? { name: product.descripcion, quantity, price: product.precio } : null;
      }).filter(p => p); // Remove nulls if product not found
    });

    return {
      nombre: userName,
      productos: formattedProducts,
      id_pedido: order.id,
      subtotal: order.subtotal,
      impuestos: order.impuesto,
      total: order.total,
      fecha: order.fecha
    };
  });
  };

  const finalOutput = transformData(filteredOrders, products, users);
  return finalOutput;
}