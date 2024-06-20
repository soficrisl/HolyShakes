import React from 'react'

function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <nav className="flex space-x-4">
        <a href="#" className="text-black dark:text-white">Inicio</a>
        <a href="#" className="text-black dark:text-white">Menú</a>
        <a href="#" className="text-black dark:text-white">Conócenos</a>
      </nav>
      <img src="img/logo.png" alt="Holly Shakes Logo" className="h-12" />
      <a href="#" className="text-black dark:text-white flex items-center">
        Iniciar Sesión
        <img src="img/usuario.png" alt="User Icon" className="ml-2" />
      </a>
    </header>
  )
}

export default Header