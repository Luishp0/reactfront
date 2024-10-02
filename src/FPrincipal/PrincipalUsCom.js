import React from "react";
import './Css/principal.css';
import Banner from './Banner.js'
import PrincipalUs from './PrincipalUs'
import Footer from "./Footer";



const PrincipalUsCom = () => {  
    

    return(
        <div>
            <Banner/>
            
            <PrincipalUs />
            <Footer/>
        </div>
    )
}

export default PrincipalUsCom