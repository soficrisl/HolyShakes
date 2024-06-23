/* eslint-disable no-unused-vars */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const Carrousel = () => {
  const data = [
    {
      product: 'Sandwich de Huevo',
      image: '../src/assets/carrousel_images/egg_sandwich.png'
    },
    {
      product: 'PB Milkshake',
      image: '../src/assets/carrousel_images/milkshake.png'
    },
    {
      product: 'Torta de Nutella',
      image: '../src/assets/carrousel_images/choc_cake.png'
    },
    {
      product: 'Sandwich de Pernil',
      image: '../src/assets/carrousel_images/sandwich.png'
    },
    {
      product: 'Waffles',
      image: '../src/assets/carrousel_images/waffles.png'
    },
    {
      product: 'Empanaditas',
      image: '../src/assets/carrousel_images/empanaditas.png'
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
    <div className="w-3/4 mx-auto">
    <p>PRODUCTOS</p>
      <div className="mt-20">
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
    </div>
  );
};

export default Carrousel;
