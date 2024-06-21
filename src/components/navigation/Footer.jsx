
function Footer() {
  return (
    <>
      <div className='bg-custom-yellow p sm:p-2 md:p-4 lg:p-6 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 sm:text-xl md:text-2xl lg:text-2xl xl:text-3x1 font-montserrat'>
        <div className='flex flex-row items-center justify-between '>
          <div className='flex sm:space-x-2 md:space-x-3 lg:space-x-4 justify-center items-center' >
            <img className='object-cover'  src="./src/assets/universidad.png" alt="" />
            <img className='w-12 sm:w-12 md:w-24 lg:w-32 object-cover' src="./src/assets/logocir.png" alt="" />
          </div>
          <div className='flex flex-row items-center justify-between space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12'>
            <img className='w-4 sm:w-6 md:w-4 lg:w-8' src="./src/assets/facebook.png" alt="" />
            <img className='w-8 sm:w-10 md:w-12 lg:w-14' src="./src/assets/twitter.png" alt="" />
            <img className='w-8 sm:w-10 md:w-14 lg:w-20' src="./src/assets/instagram.png" alt="" />
          </div>
          <div className='flex flex-col justify-center items-center space-y-5 '>
            <p>Feedback</p>
            <div className='flex flex-row items-center space-x-4'>
              <img className='w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16' src="./src/assets/telefonob.png" alt="" />
              <p>+58 4129223916</p>
            </div>
          </div>
        </div>
        <p className='w-full text-center '>©2024 Holly Shakes. Todos los derechos reservados.</p>
      </div>
    </>
  )
}

export default Footer