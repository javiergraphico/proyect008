import React from 'react'
import { motion } from 'framer-motion';
import './fouuter.css'

const Fouuter = () => {
  return (

    <motion.div
      initial={{ opacity: 0, y: -300 }} // Estado inicial de la animación
      animate={{ opacity: 1, y: 0 }} // Estado animado
      exit={{ opacity: 0, y: -300 }} // Estado de salida de la animación
    
    >
      <footer className="footer contenedor container">
        <div className="footer__markertign">
          <div className="footer__markertign__content">
            <h3 className="footer__markertign__h3">Get Free Marketing Analysis</h3>
            <p className="footer__p">Amet minim mallit non desnit Lorem Ipsum ast sit aliqua dolor do amet sit velit lorem ipsum velit</p>
          </div>
          <div className="footer__markertign__button">
            <button className="footer__button">Contact</button>
          </div>
        </div>
        <div className="footer__container">
          <div className="footer__content__item">
            <h3 className="footer__logo">DM. Agency</h3>
            <p className="footer__logo__p">DM. Agency is a company that specializes in providing digital marketing service, has more than 10 years of experience making it the best and will continue to develop until now</p>
          </div>
          <div className="footer__content__item">
            <h3 className="footer__content__h3">Special Links</h3>
            <ul className="footer__content__ul">
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Our Service</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Categories</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Portfolio</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Best Features</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Premium Member</a>
              </li>
            </ul>
          </div>
          <div className="footer__content__item">
            <h3 className="footer__content__h3">Company</h3>
            <ul className="footer__content__ul">
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Sign Up</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Contact</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Office Map</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">FAQs</a>
              </li>
      
            </ul>
          </div>
          <div className="footer__content__item">
            <h3 className="footer__content__h3">Platform</h3>
            <ul className="footer__content__ul">
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Newsletter</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Software Tools</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Partnership</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Brand Product</a>
              </li>
              <li className="footer__content__li">
                <a className="footer__content__a" href="#">Get The App</a>
              </li>
      
            </ul>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Fouuter