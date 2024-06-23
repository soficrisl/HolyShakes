import logo from '../../assets/logo.png' ;
import usuario from '../../assets/usuario.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full h-12 p-16 flex justify-between items-center bg-creamhs font-montserrat text-xs sm:text-sm md:text-lg lg:text-xl">
      <nav className="flex space-x-4">
        <Link to="/Home" className="text-black">Inicio</Link>
        <Link to="/Menu" className="text-black">Menú</Link>
        <Link to="/Conocenos" className="text-black">Conócenos</Link>
      </nav>
      <Link to="/Home" className="text-black">
        <img src={ logo } alt="" className="h-28" />
      </Link>
      <Link to="/Login" className="text-blackflex items-center flex">
        Iniciar Sesión
        <img src={ usuario } alt="" className="ml-2" />
      </Link>
    </header>
  );
};

export default Navbar;
