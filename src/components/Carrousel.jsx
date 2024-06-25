/* eslint-disable no-unused-vars */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types'; 
import swimagen from "../assets/carrousel_images/egg_sandwich.png";   
import milkshakeimagen from "../assets/carrousel_images/milkshake.png";  
import cake from "../assets/carrousel_images/choc_cake.png" ;
import pernil from "../assets/carrousel_images/sandwich.png" ;
import waffles from "../assets/carrousel_images/waffles.png";
import empanadas from "../assets/carrousel_images/empanaditas.png"

const Carrousel = () => {
  const data = [
    {
      product: 'Sandwich de Huevo',
      image: swimagen
    },
    {
      product: 'PB Milkshake',
      image: milkshakeimagen
    },
    {
      product: 'Torta de Nutella',
      image: cake
    },
    {
      product: 'Sandwich de Pernil',
      image: pernil
    },
    {
      product: 'Waffles',
      image: waffles
    },
    {
      product: 'Empanaditas',
      image: empanadas
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };

  // // Flecha para seguir hacia la derecha en el carrusel
  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  
  //   return (
  //     <button
  //       className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${className}`}
  //       style={{ ...style }}
  //       onClick={onClick}
  //     >
  //       <svg
  //         className="h-6 w-6 text-gray-700"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M9 8L15 12L9 16"
  //           stroke="currentColor"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     </button>
  //   );
  // }
  
  
  

  // NextArrow.propTypes = {
  //   className: PropTypes.string,
  //   style: PropTypes.object,
  //   onClick: PropTypes.func,
  // };

  //  // Flecha para ir hacia la izquierda en el carrusel
  // function PreviousArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // PreviousArrow.propTypes = {
  //   className: PropTypes.string,
  //   style: PropTypes.object,
  //   onClick: PropTypes.func,
  // };

  return (
    <div> 
      <div className="w-3/4 flex mx-auto m-16 flex-col mb-2 font-montserrat">
        <h2 className = " text-orangehs self tracking-widest text-center text-2xl xl:text-4xl font-montserrat font-semibold ">PRODUCTOS</h2>
        <div className="mt-6">
          <Slider{...settings}>
              {data.map((d) => 
              <div key ={d.product} className="p-4">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                      <div className="flex justify-center">
                          <img src={d.image}
                          alt={d.product} 
                          className="h-48 w-48 object-cover"
                          />
                          </div>
                          <div className="text-center mt-4">
                              <p className="text-lg font-semibold">{d.product}</p>
                          </div>
                      </div>
              </div>
              )}
          </Slider>
      </div>
      <button 
      className='mt-20 mb-6  pt-2 pb-2 pl-4 pr-4 border-4 border-orangehs self-center rounded-3xl text-orangehs uppercase font-bol hover:bg-orange-50'
      style= {{fontFamily: "'Open Sans' , sans-serif", fontWeight: 'bold'}}> Ver todo el Menú</button>
    </div>


    </div>
    
  );
};

export default Carrousel;

// hello