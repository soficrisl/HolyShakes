import { Router } from "react-router-dom";
import { BrowserRouter,Link,Route } from "react-router-dom";
import Feedback from "../../pages/Feedback";

export default function Footer(){
  return (
      <>
      <div className='bg-custom-yellow w-full p-4 sm:p-2 md:p-4 lg:p-6 xl:p-6 space-y-4  sm:space-y-4 md:space-y-4 lg:space-y-6 text-xs sm:text-sm md:text-lg lg:text-xl font-montserrat'>
        <div className='flex flex-row items-center justify-between '>
          <div className='flex sm:space-x-2 md:space-x-3 lg:space-x-4 justify-center items-center' >
            <img className='w-20 sm:w-40 md:w-50 xl:w-60 object-cover'  src="./src/assets/universidad.png" alt="" />
            <Link to="/Home">
              <img className='w-10 sm:w-12 md:w-20 lg:w-28 xl:w-36 object-cover' src="./src/assets/logocir.png" alt="" />
            </Link>
          </div>
          <div className='flex flex-row items-center justify-between space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 sm:pr-8 md:pr-10 lg:pr-15 xl:pr-40'>
            <img className='w-3 sm:w-5 md:w-6 lg:w-7' src="./src/assets/facebookb.png" alt="" />
            <img className='w-6 sm:w-8 md:w-12 lg:w-12' src="./src/assets/twitter.png" alt="" />
            <a href="https://www.instagram.com/hollyshakesvzla" target="_blank" rel="noopener noreferrer">
              <img className='w-7 sm:w-8 md:w-14 lg:w-18' src="./src/assets/instagram.png" alt="" />
            </a>
          </div>
          <div className='flex flex-col justify-center items-center xl:space-y-5'>
            <Link to="/Feedback"  className="underline">Feedback</Link>
            <div className='flex flex-row items-center xl:space-x-4'>
              <img className='w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16' src="./src/assets/telefonob.png" alt="" />
              <a href="href=https://www.instagram.com/hollyshakesvzla" target="_blank" rel="noopener noreferrer">+58 4129223916</a>
            </div>
          </div>
        </div>
        <p className='w-full text-center '>©2024 Holly Shakes. Todos los derechos reservados.</p>
      </div>
      </>
  );
}