import React from 'react'
import Loginform from './loginform.js'
import descarga from './img/cathome.png'
import  Navbar from './navbar.js'

const Login = () => {

    return(
        <div style={{ 
            backgroundImage: `url(${descarga})`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
            }}>
              <div>
              <Navbar/>
              </div>
            <div className="page">
              <Loginform/>
            </div>
            </div>
    )
}
export default Login