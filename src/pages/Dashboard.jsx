import Insight from "../components/Insight";
import Navbar from '../components/navigation/Navbar'
import Footer from "../components/navigation/Footer";
import { useEffect, useState } from "react";
import {Bar} from 'react-chartjs-2';
import {PieChart} from "react-minimal-pie-chart"
import Graphics from '../components/Graphics'
import Chart from 'chart.js/auto';
import {getProductsId, getProductsWeek, getProductsDay} from '../controllers/products'
import { getCountProductsOrders, getSumTotal, getEarns, getOrders} from '../controllers/orders'
import { get } from "firebase/database";

/**
 *  1. productos vendidos 300$ check
 *  2. ganancia (1).0,77 check
 *  3. productos vendidos 40 check
 * 
 *  productos por categoria circular check
 *  productos por categoria y dia barras
 *  ventas mensuales
 */


export default function Dashboard(){
  // const [productspie, setProducts] = useState([]);
  // const [productsbar, setProductsBar] = useState([]);
  
  useEffect(() => {
  //getProductsDay().then((data)=>{ setProducts(data)})
  //getProductsWeek().then((data)=>{ setProductsBar(data); console.log(data)})},[])
})
  return (
    <>
      <Navbar></Navbar>
      <main className='bg-gradient-circle h-screen sm:h-auto flex-col flex p-2 gap-y-2 justify-center xl:p-8 font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl'>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h1 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Dashboard</h1>
          <div className='flex flex-col lg:flex-row lg:flex-none'>
            <Insight title='Productos Vendidos' message="Facturación de Holly Shakes en un mes." value='80$'></Insight>
            <Insight title='Ingresos' message="Ingresos menos gastos de Holly Shakes en un mes." value='300'></Insight>
            <Insight title='Productos Vendidos' message="Productos Vendidos por Holly Shakes en un mes." value='40'></Insight>
          
          </div>
        </div>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h2 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Ventas diarias</h2>
          <div className='bg-white p-2'>
          {/* <PieChart data={productspie} label={({ dataEntry }) => dataEntry.label} labelStyle={
        {
            fill: "white",
        }
          } className="h-32" ></PieChart> */}
          </div>
        </div>
        <div  className='bg-creamhs h-auto rounded-2xl p-2'>
          <h2 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Ventas diarias</h2>
          <Graphics></Graphics>
        </div>
      </main>
        
      <Footer></Footer>
      
    </>
  );
}