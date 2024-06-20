import React from 'react'
import Header from '../components/nav/Header'
import Footer from '../components/nav/Footer'
import Mainlogin from '../components/nav/Mainlogin'

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-blue-100 dark:from-zinc-800 dark:to-zinc-900">
      <Header/>
      <Mainlogin/>
      <Footer/>
    </div>
  )
}

export default Login