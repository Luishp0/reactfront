import React from "react";
import './Css/principal.css';
import Banner from './Banner.js'
import Principal from './Principal.js'
import Footer from "./Footer";



const PrincipalCompleto = () => {  
    

    return(
        <div>
            <Banner/>
            
            <Principal />
            <Footer/>
        </div>
    )
}

export default PrincipalCompleto