import Insight from "../components/Insight";
import Navbar from '../components/navigation/Navbar'
import Footer from "../components/navigation/Footer";
import { useEffect, useState } from "react";
import {Pie} from 'react-chartjs-2';
import Graphics from '../components/Graphics'
import Chart from 'chart.js/auto';
import {getProductsId, getProductsWeek, getProductsDay, getProductsMonth} from '../controllers/products'
import { getCountProductsOrders, getSumTotal, getOrders} from '../controllers/orders'
import { get } from "firebase/database";
import NavbarAdmin from "../components/navigation/NavbarAdmin";

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
  const [productspie, setProductsPie] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: [] }]
  });

  
  const [productsbarWeek, setProductsBarWeek] = useState([]);
  const [productsbarMonth, setProductsBarMonth] = useState([]);
  const [productsSales, setProductsSales] = useState(0);
  const [productsEarns, setProductsEarns] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
  getProductsDay().then((data)=>{ setProductsPie(data)})
  getProductsWeek().then((data)=>{ setProductsBarWeek(data)  });
  getProductsMonth().then((data)=>{ setProductsBarMonth(data) })
  getCountProductsOrders().then((data)=>{ setProductsCount(data) })
  getSumTotal().then((data)=>{ setProductsSales(data);setProductsEarns(data*0.77) })
 

},[]);
  return (
    <>
      <NavbarAdmin></NavbarAdmin>
      <main className='bg-gradient-circle h-screen sm:h-auto flex-col flex p-4 sm:p-8 gap-y-2 sm:gap-y-8 justify-center xl:p-8 font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl'>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h1 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Dashboard</h1>
          <div className='flex flex-col lg:flex-row lg:flex-none'>
            
            <Insight title='Productos Vendidos' message="Facturación de Holly Shakes en un mes." value={productsSales+'$'}></Insight>
            <Insight title='Ingresos' message="Ingresos menos gastos de Holly Shakes en un mes." value={productsEarns+'$'}></Insight>
            <Insight title='Productos Vendidos' message="Productos Vendidos por Holly Shakes en un mes." value={productsCount+''}></Insight>
          
          </div>
        </div>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h2 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Ventas diarias</h2>
          <div className='bg-white p-2'>
           
           
           <Pie data={productspie} options={{}} className="max-h-[600px]"></Pie>
          </div>
        </div>
        <div  className='bg-creamhs h-auto gap-y-4 rounded-2xl p-2'>
          <h2 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Ventas Semanales</h2>
          <Graphics data={productsbarWeek}></Graphics>
        </div>
        <div  className='bg-creamhs h-auto gap-y-4 rounded-2xl p-2'>
          <h2 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Ventas Mensuales</h2>
         
          <Graphics data={productsbarMonth}></Graphics>
        </div>
      </main>
        
      <Footer></Footer>
      
    </>
  );
}