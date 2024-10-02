import React, { useState, useEffect } from "react";
import imageho from "./img/Hojas.png";
import barra from "./img/barra.png";
import "./Css/Loginform.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from 'jwt-decode';

  
const Loginform = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errors, setErrors] = useState({ correo: '', contrasena: '' });
  const navigate = useNavigate()


  useEffect(() => {
    const storedCorreo = localStorage.getItem('correo');
    if (storedCorreo) {
      setCorreo(storedCorreo);
    }
  }, []);
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validación del correo electrónico
    if (!correo) {
      newErrors.correo = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido.';
      isValid = false;
    }

    // Validación de la contraseña
    if (!contrasena) {
      newErrors.contrasena = 'La contraseña es obligatoria.';
      isValid = false;
    } else if (contrasena.length < 5) {
      newErrors.contrasena = 'La contraseña debe tener al menos 6 caracteres.';
      isValid = false;
    }
    setErrors(newErrors);

    return isValid;
  };
 //para dejar el correo que se tecleado
  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
    localStorage.setItem('correo', e.target.value);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Enviar datos al servidor
      const data = {
        correo: correo,
        contrasena: contrasena
      };

      localStorage.setItem('correo', correo);

      axios.post('http://localhost:8000/login', data)
        .then((response) => {
          
          //recoge el token y lo decodifica con la libreria jwtDecode
          const token = response.data.token;
          const decodedToken = jwtDecode(token);       
          
          
          // Aquí se redirecciona si los datos son correctos
          
          const roles_idroles = decodedToken.roles_idroles  
             
           
            // Redirecciona según el valor de roles_idroles
            if (roles_idroles === 1) 
            {
              //administrador de la pagina
              const userId = decodedToken.idusuario;
              navigate(`/tabla/${userId}`);

            } else if (roles_idroles === 2) 
            {
              //usuarios normales
              const userId = decodedToken.idusuario;
              navigate(`/principalUs/${userId}`); 
            } else {
              // Manejar otros roles o casos
            }

          
        })
        .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          // Error de credenciales inválidas
          setErrors({ general: error.response.data.error });
        } else {
          // Otro tipo de error
          setErrors({ general: 'Error en el servidor' });
        }
      });
    }
  };

  

  return (
    <div className="cover">
      <div className="titulo">
        <h2>Introducir Usuario y Contraseña</h2>
        <img className="img2" src={barra} alt="barra.png" />
      </div>
      <form className="formlogin" onSubmit={handleFormSubmit}>
        <div className="input-group"> {errors.general && <p className="error-general">{errors.general}</p>}</div>
       
        <div className="input-group">
          <input
            className="input-login"
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={handleCorreoChange}
          />
          {errors.correo && <p className="error-message">{errors.correo}</p>}
        </div>        

        <div className="input-group">
          <input
            className="input-login"
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          {errors.contrasena && (
            <p className="error-message">{errors.contrasena}</p>
          )}
        </div>

        <button type="submit" className="bbt-ingresar" >
          Ingresar
        </button>
        <Link to="/create" className="span">
          Registrar
        </Link>
      </form>
      <div>
      
      </div>
      <div className="imghojas">
        <img className="img1" src={imageho} alt="Hojas.png" />
      </div>
    </div>
  );
};

export default Loginform;
