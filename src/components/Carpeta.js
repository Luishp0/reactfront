import React from 'react'
import Navbar from './components/navbar'
import Formulario from './components/Formulario'
import fondoRegis from './img/fondoRegistro.png'
import CarpetaD from './components/CarpetaD'


const Carpeta = () => {
  return (
  <div>
    <div>
        <Navbar/>
    </div>
    <div className="page-carpeta">
         <CarpetaD/>
    </div>
  </div>
  )
}

export default Carpeta