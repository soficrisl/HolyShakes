// components/Main.js
import React from 'react';

const Mainlogin = () => {
  return (
    <main className="flex flex-col items-center w-full max-w-md p-4">
      <h1 className="text-2xl text-teal-600 dark:text-teal-400 mb-6">INICIAR SESIÓN</h1>
      <form className="w-full space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Correo</label>
          <input type="email" id="email" placeholder="Ingresa tu correo electrónico" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" />
        </div>
        <button type="submit" className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600">Ingresar</button>
        <button type="button" className="w-full py-2 bg-white text-black border border-zinc-300 rounded-md shadow-sm flex items-center justify-center hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600">
          <img src="img/Google.webp" alt="Google Icon" className="mr-2" />
          Continuar con Google
        </button>
      </form>
      <div className="my-6 w-full flex items-center">
        <div className="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div>
        <span className="mx-4 text-zinc-500 dark:text-zinc-400">o</span>
        <div className="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div>
      </div>
      <p className="text-center text-zinc-700 dark:text-zinc-300">Eres nuevo a Holly Shakes?</p>
      <a href="#" className="w-full py-2 mt-2 border border-orange-500 text-orange-500 rounded-md text-center hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-600">Registrate</a>
      <a href="#" className="w-full py-2 mt-2 border border-orange-500 text-orange-500 rounded-md text-center hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-600">Ingreso administrador</a>
    </main>
  );
};

export default Mainlogin;
