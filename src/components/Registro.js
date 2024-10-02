import React from 'react'
import Navbar from '../components/navbar.js'
import fondoRegis from './img/fondoRegistro.png'
import CompCreateUser from '../user/createUser.js'


const App = () => {
  return (
  <div style={{ 
    backgroundImage: `url(${fondoRegis})`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
	  backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
    }}>
      <div>
        <Navbar/>
      </div>
      <div className="page-registro">
      <CompCreateUser></CompCreateUser>
      </div>
    </div>
  )
}

export default App