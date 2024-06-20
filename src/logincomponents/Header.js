import React from 'react'

const Header = ({ setView }) => {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <nav className="flex space-x-4">
        <button onClick={() => setView('main')} className="text-black dark:text-white">Inicio</button>
        <button onClick={() => setView('footer')} className="text-black dark:text-white">Menú</button>
        <button onClick={() => setView('login')} className="text-black dark:text-white">Conócenos</button>
      </nav>
      <img src="img/logo.png" alt="Holly Shakes Logo" className="h-12" />
      <button onClick={() => setView('login')} className="text-black dark:text-white flex items-center">
        Iniciar Sesión
        <img src="img/usuario.png" alt="User Icon" className="ml-2" />
      </button>
    </header>
  );
};


export default Header
