import React from 'react'
import Navbar from '../components/navbar.js'
import TablaEs from '../components/TablaEs.js'
import fondoTabla from '../components/img/fondoTabla.png'


const Tabla = () => {
  return (
    <div style={{ 
        backgroundImage: `url(${fondoTabla})`,        
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50%',
        width:'100%'
        }}>
       <div>
        
        <Navbar/>
        
       </div>
       
       <div className="page-tabla">
         <TablaEs/>
       </div>
    </div>
  )
}

export default Tabla
