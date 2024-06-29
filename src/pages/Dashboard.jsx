import Insight from "../components/Insight";
import Navbar from '../components/navigation/Navbar'
import Footer from "../components/navigation/Footer";

export default function Dashboard(){
  return (
    <>
      <Navbar></Navbar>
      <main className='bg-gradient-circle h-screen flex-col flex p-2 justify-center xl:p-8 font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl'>
        <div  className='bg-creamhs rounded-2xl p-2'>
          <h1 className=' text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold '>Dashboard</h1>
          <div className='flex flex-col lg:flex-none'>
            <Insight title='Productos Vendidos' message="Facturación de Holly Shakes en un mes." value='80$'></Insight>
            <Insight title='Ingresos' message="Ingresos menos gastos de Holly Shakes en un mes." value='300'></Insight>
            <Insight title='Productos Vendidos' message="Productos Vendidos por Holly Shakes en un mes." value='40'></Insight>
          
          </div>
          </div>
      </main>
        
      <Footer></Footer>
      
    </>
  );
}