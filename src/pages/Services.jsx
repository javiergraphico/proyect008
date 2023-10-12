import React from 'react'
import { motion } from 'framer-motion';
import './services.css'

const Services = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: -100 }} // Estado inicial de la animación
        animate={{ opacity: 1, y: 0 }} // Estado animado
        exit={{ opacity: 0, y: -100 }} // Estado de salida de la animación
      >
        <div className='services_bg'>
          <div className='container pt-5'>
            <h1 className='display-1 text-white'>Hola Servicios</h1>
            <button className='btn btn-primary'>Descarga CV</button>
          </div>
        </div>
      </motion.div>
  )
}

export default Services
