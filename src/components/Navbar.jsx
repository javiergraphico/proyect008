import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  const [collapse , setCollapse] = useState(true);
  return (
    <>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary pt-3 pb-3">
        <div className="container justify-content-between ">

          <Link className="navbar-brand pb-sm-3 pb-lg-0" to="/">Roraima</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" onClick={() => setCollapse(!collapse)}
          >
          {collapse ? (<svg xmlns="http://www.w3.org/2000/svg" fill="#000" height="2rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="#000" height="2rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>)}
            

            
          </button>

          {/* menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ms-auto">

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/skill">Skill</Link></li>
                  <li><Link className="dropdown-item" to="/experiencia">Experiencia</Link></li>
                  <li><a className="dropdown-item" href="/">Habilidades</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Servicio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/porfolio">Porfolio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>

            </ul>
          </div>
          {/* menu fin */}
        </div>
      </nav>
    </>
  )
}

export default Navbar