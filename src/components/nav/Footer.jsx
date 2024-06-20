import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="w-full bg-yellow-100 dark:bg-zinc-800 p-4 flex flex-col items-center">
      <div className="flex items-center space-x-4">
        <img src="img/unimet.png" alt="Universidad Metropolitana Logo" className="h-12" />
        <img src="img/logo.png" alt="Holly Shakes Logo" className="h-12" />
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-zinc-700 dark:text-zinc-300">Quejas/Feedback</a>
        <a href="tel:+584129223916" className="text-zinc-700 dark:text-zinc-300">+58 4129223916</a>
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 mt-4">©2024 Holly Shakes. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer