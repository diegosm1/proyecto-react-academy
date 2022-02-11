import React from "react";
import 'animate.css';
import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../actions/actions";
import { useDispatch } from "react-redux";

export const NavBar = () => {

  const dispatch =  useDispatch()

  const [active, setActive] = useState(false);

  const handleMenu = () => {
    document.getElementById("nav-content").classList.toggle("hidden");
  }

  const handleActive = () => {

    setActive(true);
  }

  const handleLogOut = () => {
    dispatch(startLogout());
  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className=" " to='/'>
            Pagina Principal
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            onClick={handleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden xl:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link className='text-gray-400 hover:text-white active:text-white focus: focus:text-white' to='/'>
                Principal
              </Link>
            </li>
            <li className="mr-3 hover:text-white" >
              <NavLink className='text-gray-400 hover:text-white active:text-white focus:underline-offset-8 focus:text-white' to='apod' >APOD</NavLink>
            </li>
            <li className="mr-3 hover:text-white" >
              <NavLink onClick={handleLogOut} className='text-gray-400 hover:text-white active:text-white focus:underline-offset-8 focus:text-white' to='/login' >Logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );


};
