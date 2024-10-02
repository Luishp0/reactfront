
import imageho from '../components/img/Hojas1.png'
import barra from "../components/img/barra.png"
import "../components/Css/Formulario.css"
import axios from 'axios'
import { useState, React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const URI = 'http://localhost:8000/users/'

const CompCreateUser = () => {

   
    const [nombre, setNombre] = useState('')
   
    const [app, setApp] = useState('')
    const [apm, setApm] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [telefono, setTelefono] =useState('')
    const navigate = useNavigate()




    //procedimiento para guardar usuarios
    const store = async (e) => {
        e.preventDefault()
        
        if(
            nombre.trim() === '' ||
            app.trim() === '' ||
            apm.trim() === '' ||
            correo.trim() === '' ||
            contrasena.trim() === '' ||
            telefono.trim() === '' 
        ){
            Swal.fire('Error', 
                      'Debes Completar todos los campos de registro', 
                      'error');
            return;
          }


        await axios.post(URI, {
            
                roles_idroles:2,
                nombre : nombre,
                app : app,
                apm : apm,
                correo : correo,
                contrasena : contrasena,
                telefono : telefono
        })
        navigate('/')
    }

    return(
        <div className="cover-reg"> 
             <div className="tituloRegistro">
                 <div className="titulo1">
                     <h1> Registro </h1>
                     <img className= "img3"src= {barra} alt='barra de colores'/>
                     <p style={{color:'red', right:'500px'}}>(*) Campos obligatorios</p>
                 </div>
                 <div className="imghojas1">
                     <img className= "img4"src= {imageho} alt='hojas de ayuntamiento de colores'/>
                 </div>
             </div>
                <form className="ForRe" onSubmit={store}>
                    <div className="componente">
                        <div className="contaIz">
                            <input 
                            className="inputRe" 
                            type="text" 
                            placeholder="Nombre(S)*"
                            value={nombre}
                            onChange={ (e)=> setNombre(e.target.value)}
                            
                            /> 
                            <input  
                            className="inputRe"
                            type="text" 
                            placeholder="Apellido Paterno*"
                            value={app}
                            onChange={ (e) => setApp(e.target.value)}
                            
                            /> 
                            <input  
                            className="inputRe"
                            type="text" 
                            placeholder="Apellido Materno*"
                            value={apm}
                            onChange={ (e) => setApm(e.target.value)}
                            
                            /> 
                        </div>
                        <div className="contaDe">
                            <input  
                            className="inputRe" 
                            type="text" 
                            placeholder="Telefono*"
                            value={telefono}
                            onChange={ (e) => setTelefono(e.target.value)}
                            
                            /> 
                            <input 
                            className="inputRe" 
                            type="email" 
                            placeholder="Correo*"
                            value={correo}
                            onChange={ (e) => setCorreo(e.target.value)}
                          
                            /> 
                            <input 
                            className="inputRe" 
                            type="password" 
                            placeholder="Contraseña*"
                            value={contrasena}
                            onChange={ (e) => setContrasena(e.target.value)}
                          
                            /> 
                        </div>
                    </div>
                    <button type="submit" className="Registrar"> Registrar </button>
                    <Link to='/' className='span'>Login</Link>
                </form>
        </div>
    )
}


export default CompCreateUser