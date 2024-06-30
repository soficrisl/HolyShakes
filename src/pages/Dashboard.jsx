import Insight from "../components/Insight";
import Navbar from '../components/navigation/Navbar'
import Footer from "../components/navigation/Footer";
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {getProductsId, getCategoryFrequency} from '../controllers/products'
import {getProductsOrders, getCountProductsOrders, getSumTotal, getEarns,getOrdersByField} from '../controllers/orders'

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
  var data = getCategoryFrequency();
  const data2 = data.then((data));
  console.log(data2);
  

  return (
    <>
      <Navbar></Navbar>
      <main className='bg-gradient-circle h-screen flex-col flex p-2 justify-center xl:p-8 font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl'>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h1 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Dashboard</h1>
          <div className='flex flex-col lg:flex-row lg:flex-none'>
            <Insight title='Productos Vendidos' message="Facturación de Holly Shakes en un mes." value='80$'></Insight>
            <Insight title='Ingresos' message="Ingresos menos gastos de Holly Shakes en un mes." value='300'></Insight>
            <Insight title='Productos Vendidos' message="Productos Vendidos por Holly Shakes en un mes." value='40'></Insight>
          
          </div>
        </div>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h1 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Dashboard</h1>
          <div className='flex flex-col lg:flex-row lg:flex-none'>
            
          </div>
        </div>

      </main>
        
      <Footer></Footer>
      
    </>
  );
}