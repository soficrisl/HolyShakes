import logo from '../../assets/logo.png' ;
import usuario from '../../assets/usuario.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full h-12 p-16 flex justify-between items-center bg-creamhs">
      <nav className="flex space-x-4">
        <Link to="/" className="text-black dark:text-white">Inicio</Link>
        <Link to="/menu" className="text-black dark:text-white">Menú</Link>
        <Link to="/aboutus" className="text-black dark:text-white">Conócenos</Link>
      </nav>
      <img src={ logo } alt="" className="h-28" />
      <Link to="/login" className="text-black dark:text-white flex items-center">
        Iniciar Sesión
        <img src={ usuario } alt="" className="ml-2" />
      </Link>
    </header>
  );
};

export default Navbar;
