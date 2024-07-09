import Campus from '../../assets/Campus.webp';
import Logoaboutus from '../../assets/Logoaboutus.png';
import logouni from '../../assets/logouni.png';
import mail from '../../assets/mail.png';
import flechas from '../../assets/flechas.png';
import phone from '../../assets/phone.png';

const AboutUs = () => {
  return (
    <div className="bg-creamhs w-full dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-montserrat">
      <section className="bg-orange-400 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">NOSOTROS</h1>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-teal-600 dark:text-teal-300 text-4xl font-semibold mb-4">
            “Sabores Divinamente Irresistibles a tu alcance”
          </p>
        </div> 
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center px-4">
          <img
            src={Logoaboutus}
            alt="Holly Shakes Logo"
            className="mb-4 md:mb-0 md:mr-4 w-32 md:w-48"
          />
          <p className="text-base text-left max-w-lg md:text-center md:text-justify">
            En la Universidad Metropolitana, nació la idea de Holly Shakes, un stand dedicado a ofrecer deliciosos desayunos y almuerzos, como una respuesta a la necesidad de los estudiantes y el personal de contar con opciones alimenticias sabrosas y saludables. Inspirados por el dinamismo y la creatividad del entorno universitario, decidimos fusionar la tradición culinaria con un toque moderno y fresco. Bajo nuestro lema, Sabores divinamente irresistibles a tu alcance, Holly Shakes se ha convertido en un punto de encuentro donde la comunidad universitaria puede disfrutar de comidas nutritivas y momentos de relajación en medio de sus ajetreadas agendas.
          </p>
        </div>
      </section>
      <section className="bg-teal-600 w-full dark:bg-zinc-700 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <img
            src={Campus}
            alt="Location Image"
            className="bg-9DD9D2 w-full dark:bg-zinc-700 py-8"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-orange-400 text-4xl font-bold mb-2 text-center">¿Dónde estamos ubicados?</h2>
            <p className="text-lg font-bold text-center">Feria de la Universidad Metropolitana</p>
            <img
              src={logouni}
              alt="Holly Shakes Logo"
              className="mx-auto mt-4"
            />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-orange-400 text-3xl font-bold mb-4">CONTACTO</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <img
              src={mail}
              alt="Email Icon"
              className="h-6"
            />
            <span>hollyshakes@gmail.com</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={phone}
              alt="telefono"
              className="h-6"
            />
            <span>+58 4129223916</span>
          </div>
        </div>
      </section>
      <section className="bg-creamhs w-full dark:bg-zinc-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-teal-300 dark:text-teal-300 text-4xl font-bold italic mb-4">FEEDBACK</h2>
          <p className="text-4xl font-bold mb-4">Queremos tu opinión</p>
          <p className="mb-4">Para mejorar tu experiencia y nuestra calidad:</p>
          <img
            src={flechas}
            alt="flechas"
            className="mx-auto"
          />
          <button
            className="bg-orange-400 text-white py-4 px-8 rounded-full mt-4 text-2xl font-semibold"
          >
            FEEDBACK
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
