

export default function Footer(){
  return (
      <div className='bg-custom-yellow p-4 sm:p-2 md:p-4 lg:p-6 xl:p-6 space-y-4  sm:space-y-4 md:space-y-4 lg:space-y-6 text-xs sm:text-sm md:text-lg lg:text-xl font-montserrat'>
        <div className='flex flex-row items-center justify-between '>
          <div className='flex sm:space-x-2 md:space-x-3 lg:space-x-4 justify-center items-center' >
            <img className='w-20 sm:w-40 md:w-50 xl:w-60 object-cover'  src="./src/assets/universidad.png" alt="" />
            <img className='w-10 sm:w-12 md:w-20 lg:w-28 xl:w-36 object-cover' src="./src/assets/logocir.png" alt="" />
          </div>
          <div className='flex flex-row items-center justify-between space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 sm:pr-8 md:pr-10 lg:pr-15 xl:pr-40'>
            <img className='w-3 sm:w-5 md:w-6 lg:w-8' src="./src/assets/facebook.png" alt="" />
            <img className='w-6 sm:w-10 md:w-12 lg:w-14' src="./src/assets/twitter.png" alt="" />
            <img className='w-7 sm:w-10 md:w-14 lg:w-20' src="./src/assets/instagram.png" alt="" />
          </div>
          <div className='flex flex-col justify-center items-center xl:space-y-5'>
            <p className="underline">Feedback</p>
            <div className='flex flex-row items-center xl:space-x-4'>
              <img className='w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16' src="./src/assets/telefonob.png" alt="" />
              <p>+58 4129223916</p>
            </div>
          </div>
        </div>
        <p className='w-full text-center '>©2024 Holly Shakes. Todos los derechos reservados.</p>
      </div>
  );
};