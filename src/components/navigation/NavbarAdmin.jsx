/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */

import logo from "../../assets/logocir.png";
import usuario from "../../assets/usuario.png";
import { Link } from "react-router-dom";
import appFirebase from "../../credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import {useRef} from "react"; 

const auth = getAuth(appFirebase);


const NavbarAdmin = () => {
  const [isOpen, setOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [touched, navBarOpen] = useState(false); 
  const navBarOpening = () => {
    touched ? navBarOpen(false) :navBarOpen(true)
  }

  return (
    <> 
      <header className= "bg-creamhs w-full"> 
        <nav className = "flex justify-between items-center w-[92%] mx-auto" >
          <div> 
            <img  className = "w-16" src = {logo} alt = "..."/>
          </div>
          <div className = {`nav-links md:static absolute bg-creamhs py-6 md:min-h-fit min-h-[60v] left-0 ${touched ? 'top-[9%] z-50': 'top-[-100%] z-0'}  md:w-auto w-full flex items-center px-51`}> 
            <ul className = "flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ml-4"> 
              <li> 
              <Link to="/dashboard" className="text-black dark:text-white hover:text-gray-500"> Dashboard</Link>
              </li>
              <li> 
              <Link to="/menuAdmin" className="text-black dark:text-white hover:text-gray-500"> Menú Admin</Link>
              </li>
              <li> 
              <Link to="/aboutus" className="text-black dark:text-white  hover:text-gray-500">  Pedidos</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6"> 
        {usuario ? (
          <>
            <Menu
              as="div"
              className="hidden pt-2 lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
            >
              <div>
                <Menu.Button>
                  <UserCircleIcon className="h-8" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-16 z-10 mt-2 w-40 divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex inline-flex gap-x-2">
                            <UserIcon className="h-5" /> Perfil
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          onClick={() => signOut(auth)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex inline-flex gap-x-2">
                            <ArrowRightStartOnRectangleIcon className="h-5" />{" "}
                            Cerrar Sesión
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <>
            <Link to="/login" className="text-black dark:text-white hover:text-gray-500 ">Iniciar Sesión</Link>
            <button className="text-2xl md:hidden" onClick={navBarOpening}>  <ion-icon name="menu"></ion-icon> </button>
          </>
        )}
          </div>
        </nav>

      </header>
    
    </>

);
};


    {/*
    <header className="w-full h-12 p-16 flex justify-between items-center bg-creamhs font-montserrat text-xs sm:text-sm md:text-lg lg:text-xl">
      <nav className="flex space-x-4">
        <Link to="/" className="text-black dark:text-white">
          Inicio
        </Link>
        <Link to="/menu" className="text-black dark:text-white">
          Menú
        </Link>
        <Link to="/aboutus" className="text-black dark:text-white">
          Conócenos
        </Link>
      </nav>
      <img src={logo} alt="" className="h-28 mr-24" />
      <div>
        {usuario ? (
          <>
            <Menu
              as="div"
              className="hidden pt-2 lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
            >
              <div>
                <Menu.Button>
                  <UserCircleIcon className="h-8" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-16 z-10 mt-2 w-40 divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex inline-flex gap-x-2">
                            <UserIcon className="h-5" /> Perfil
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          onClick={() => signOut(auth)}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex inline-flex gap-x-2">
                            <ArrowRightStartOnRectangleIcon className="h-5" />{" "}
                            Cerrar Sesión
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <>
            <Link to="/login" className="text-black dark:text-white hover:text-gray-500 ">Iniciar Sesión</Link>
            <button className="text-2xl md:hidden" onClick={navBarOpening}>  <ion-icon name="menu"></ion-icon> </button>
          </>
        )}
      </div>
    </header>
    */}


export default NavbarAdmin;
