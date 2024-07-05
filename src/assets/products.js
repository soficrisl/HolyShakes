import product1 from './productimages/pbmilkshake.png';
import product2 from './productimages/product2.jpg';
import product3 from './productimages/product3.jpg';
import product4 from './productimages/product4.jpg';
import product5 from './productimages/product5.jpg';
import product6 from './productimages/product6.jpg';
import product7 from './productimages/product7.jpg';
import product8 from './productimages/product8.jpg';
import product9 from './productimages/product9.png';
import product10 from './productimages/product10.jpg';
import product11 from './productimages/product11.jpg';
import product12 from './productimages/product12.jpg';
import product13 from './productimages/product13.jpg';
import product14 from './productimages/product14.png';
import product15 from './productimages/product15.png';
import product16 from './productimages/product16.png';
import product17 from './productimages/product17.png';
import product18 from './productimages/product18.jpg';
import product19 from './productimages/product19.jpg';
import product20 from './productimages/product20.jpg';
import product21 from './productimages/product21.jpg';
import product22 from './productimages/product22.png';
import product23 from './productimages/product23.jpg';
import product24 from './productimages/product24.jpg';
import product25 from './productimages/product25.jpg';
import product26 from './productimages/product26.jpg';
import product27 from './productimages/product27.jpg';
import product28 from './productimages/product28.png';
import product29 from './productimages/product29.jpg';
import product30 from './productimages/product30.jpg';
import product31 from './productimages/product31.png';
import product32 from './productimages/product32.jpg';
import product33 from './productimages/product33.jpg';
import product34 from './productimages/product34.jpg';
import product35 from './productimages/product35.jpg';
import product36 from './productimages/product36.png';
import product37 from './productimages/product37.jpg';
import product38 from './productimages/product38.jpg';
import product39 from './productimages/product39.jpg';
import product40 from './productimages/product40.jpg';
import product41 from './productimages/product41.jpg';

import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app_firebase from '../credentials';

// Assuming you already have the firestore object imported from your Firebase configuration

export const menu_list = [
  {
    menu_name: "Postres"
  },
  {
    menu_name: "Milkshakes"
  },
  {
    menu_name: "Waffles"
  },
  {
    menu_name: "Café"
  },
  {
    menu_name: "Bebidas"
  },
  {
    menu_name: "Empanaditas"
  },
  {
    menu_name: "Arepas"
  },
  {
    menu_name: "Sandwhiches"
  },
  {
    menu_name: "Bowls"
  },
  {
    menu_name: "Ensaladas"
  },
  {
    menu_name: "Bagels"
  },
  {
    menu_name: "Extras"
  }
];

export const food_list = [
  {
    _id: "1",
    name: "PB Milkshake",
    price: 12,
    image: product1,
    description: "Batido de mantequilla de maní",
    category: "Milkshakes"
  },
  {
    _id: "2",
    name: "Pie de limón",
    price: 5,
    image: product2,
    description: "Postre dulce y ácido",
    category: "Postres"
  },
  {
    _id: "3",
    name: "Torta de Nutella",
    price: 7,
    image: product3,
    description: "Torta de chocolate con Nutella",
    category: "Postres"
  },
  {
    _id: "4",
    name: "Waffles con fruta",
    price: 12,
    image: product4,
    description: "Waffles servidos con frutas frescas",
    category: "Waffles"
  },
  {
    _id: "5",
    name: "Café negro",
    price: 1,
    image: product5,
    description: "Café puro y fuerte",
    category: "Café"
  },
  {
    _id: "6",
    name: "Waffles con maple",
    price: 12,
    image: product6,
    description: "Waffles con jarabe de maple",
    category: "Waffles"
  },
  {
    _id: "7",
    name: "Empanada de carne molida",
    price: 4,
    image: product7,
    description: "Empanada rellena de carne molida",
    category: "Empanaditas"
  },
  {
    _id: "8",
    name: "Bagel de salmón",
    price: 9,
    image: product8,
    description: "Bagel con salmón ahumado",
    category: "Bagels"
  },
  {
    _id: "9",
    name: "Arepa reina pepiada",
    price: 4,
    image: product9,
    description: "Arepa rellena de pollo y aguacate",
    category: "Arepas"
  },
  {
    _id: "10",
    name: "Café con leche",
    price: 2,
    image: product10,
    description: "Café con leche espumosa",
    category: "Café"
  },
  {
    _id: "11",
    name: "Sandwich de jamón",
    price: 8,
    image: product11,
    description: "Sandwich con jamón y queso",
    category: "Sandwhiches"
  },
  {
    _id: "12",
    name: "Ensalada griega",
    price: 11,
    image: product12,
    description: "Ensalada con vegetales frescos",
    category: "Ensaladas"
  },
  {
    _id: "13",
    name: "Ensalada César",
    price: 6,
    image: product13,
    description: "Ensalada con aderezo César",
    category: "Ensaladas"
  },
  {
    _id: "14",
    name: "Sandwich de cangrejo",
    price: 8,
    image: product14,
    description: "Sandwich con carne de cangrejo",
    category: "Sandwhiches"
  },
  {
    _id: "15",
    name: "Arepa pelúa",
    price: 5,
    image: product15,
    description: "Arepa rellena de carne mechada",
    category: "Arepas"
  },
  {
    _id: "16",
    name: "Bowl de garbanzos",
    price: 12,
    image: product16,
    description: "Bowl con garbanzos y vegetales",
    category: "Bowls"
  },
  {
    _id: "17",
    name: "Tequeños",
    price: 4,
    image: product17,
    description: "Dedos de queso fritos",
    category: "Extras"
  },
  {
    _id: "18",
    name: "Deditos de pollo",
    price: 11,
    image: product18,
    description: "Dedos de pollo fritos con papas",
    category: "Extras"
  },
  {
    _id: "19",
    name: "Perro caliente",
    price: 2.5,
    image: product19,
    description: "Con salsas",
    category: "Extras"
  },
  {
    _id: "20",
    name: "Arepa llanera",
    price: 6,
    image: product20,
    description: "Con queso y carne",
    category: "Arepas"
  },
  {
    _id: "21",
    name: "Sandwhich de roast beef",
    price: 8,
    image: product21,
    description: "Con salsas y queso",
    category: "Sandwhiches"
  },
  {
    _id: "22",
    name: "Bowl de pabellon",
    price: 9,
    image: product22,
    description: "Con tajadas, arroz, caraotas y carne mechada",
    category: "Bowls"
  },
  {
    _id: "23",
    name: "Bowl de pollo y vegetales",
    price: 9,
    image: product23,
    description: "Con pollo crispy y vegetales",
    category: "Bowls"
  },
  {
    _id: "24",
    name: "Empanada de queso",
    price: 6,
    image: product24,
    description: "Frita y con queso",
    category: "Empanaditas"
  },
  {
    _id: "25",
    name: "Nachos con carne",
    price: 12,
    image: product25,
    description: "Con queso, pico de gallo y carne",
    category: "Extras"
  },
  {
    _id: "26",
    name: "Gatorade de mandarina",
    price: 2,
    image: product26,
    description: "Frío",
    category: "Bebidas"
  },
  {
    _id: "27",
    name: "Agua mineral",
    price: 1.5,
    image: product27,
    description: "Fría",
    category: "Bebidas"
  },
  {
    _id: "28",
    name: "Prime",
    price: 4,
    image: product28,
    description: "Bebida energetica",
    category: "Bebidas"
  },
  {
    _id: "29",
    name: "RedBull",
    price: 3.5,
    image: product29,
    description: "Bebida energetica",
    category: "Bebidas"
  },
  {
    _id: "30",
    name: "Te Liptón de Limón",
    price: 2,
    image: product30,
    description: "Frío",
    category: "Bebidas"
  },
  {
    _id: "31",
    name: "Pepsi",
    price: 2,
    image: product31,
    description: "De lata",
    category: "Bebidas"
  },
  {
    _id: "32",
    name: "Café con leche de almendras",
    price: 3,
    image: product32,
    description: "Lactose free",
    category: "Café"
  },
  {
    _id: "33",
    name: "Marquesa de chocolate",
    price: 6,
    image: product33,
    description: "Chocolate venezolano",
    category: "Postres"
  },
  {
    _id: "34",
    name: "Waffle de Nutella",
    price: 5,
    image: product34,
    description: "Con Nutella",
    category: "Waffles"
  },
  {
    _id: "35",
    name: "Torta 4 Leches",
    price: 6,
    image: product35,
    description: "Porción",
    category: "Postres"
  },
  {
    _id: "36",
    name: "Bagel de capresa",
    price: 6,
    image: product36,
    description: "Con tomate, pesto y mozarella",
    category: "Bagels"
  },
  {
    _id: "37",
    name: "Bagel de atún",
    price: 7,
    image: product37,
    description: "Con atún y tomate",
    category: "Bagels"
  },
  {
    _id: "38",
    name: "Frapuccino",
    price: 3,
    image: product38,
    description: "Con caramel drizzle",
    category: "Café"
  },
  {
    _id: "39",
    name: "Milkshake de vainilla",
    price: 6,
    image: product39,
    description: "Con crema",
    category: "Milkshakes"
  },
  {
    _id: "40",
    name: "Milkshake de chocolate",
    price: 6,
    image: product40,
    description: "Con crema",
    category: "Milkshakes"
  },
  {
    _id: "41",
    name: "Milkshake de fresa",
    price: 6,
    image: product41,
    description: "Con crema",
    category: "Milkshakes"
  }
];
