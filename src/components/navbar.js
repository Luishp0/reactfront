import React from "react";
import './Css/Navbar.css'
import Logo from "./img/logo-pope.png";


const Navbar = () => {

    return (
        <nav className="navlogo">
           <ul>
            
                <img className="imgLo" src= {Logo} alt="logotipo"/>
             
           </ul>
        </nav>
    )
}

export default Navbar

