import React from 'react'
import './Css/Tabla.css'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import {BsGraphUpArrow} from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {BsTicketDetailed} from 'react-icons/bs'
import {BiMapPin} from 'react-icons/bi'


const TablaEs = () => {
    const { userId } = useParams();
    const navigate = useNavigate()
    const [Desaparecido, setDesaparecido] = useState([])
    const [consultaBusqueda, setConsultaBusqueda] = useState('');
    
    useEffect( () => {
        getDesaparecidos()
    },[])
    //procedimiento para mostrar todos los desaparecidos///////////
    const getDesaparecidos = async () => {
        const res = await axios.get(`http://${process.env.REACT_APP_HOSTAPI}/desaparecido/activo`)
        setDesaparecido(res.data)
    }


    const manejarCambioConsultaBusqueda = (evento) => {
      setConsultaBusqueda(evento.target.value);
    };

    const desaparecidoFiltrado = Desaparecido.filter((desaparecido) => {
      const nombreCompleto = `${desaparecido.nombre} ${desaparecido.app} ${desaparecido.apm}`;
      return nombreCompleto.toLowerCase().includes(consultaBusqueda.toLowerCase());
    });
    

    const NavigateToPrincipal = () => {
      navigate(`/principalUs/${userId}`);
    };
    const NavigateToGrafica = () => {
      navigate(`/graficaUs/${userId}`);
    };
   
    
  return (
   
    <div>
      
        <br/>
            <div>
              
          <Button
            variant="contained" color="secondary" onClick={NavigateToGrafica}
            style={{
              marginRight: '20px',
              left: '75%',
              marginTop: '-180px',
              borderRadius: '30px',
              background: 'rgba(74, 193, 224, 1)',
              boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
          <BsGraphUpArrow style={{ fontSize: '25px' }} />
            Gráfica
          </Button>
          <Button variant="contained" color="secondary"   onClick={NavigateToPrincipal}
            style={{
            
              marginRight: '20px',
              left: '75%',
              marginTop: '-180px',
              borderRadius: '30px',
              background: 'rgba(241, 138, 0, 0.75)',
              boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)',
            }}
          >       
          <BiUserPlus style={{ fontSize: '25px' }} />
            Registrar
          </Button>
            </div>
        <br/>
        <div className="search-bar1">
        <div>
          <input style={{ borderRadius: '30px'}}
          type="text"
          placeholder="Buscar nombre..."   
          value={consultaBusqueda}
          onChange={manejarCambioConsultaBusqueda}       
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44 43" fill="none">
      <path d="M0.736328 21.5C0.736328 9.62588 10.4941 0 22.3682 0C34.2423 0 44.0001 9.62588 44.0001 21.5C44.0001 33.3741 34.2423 43 22.3682 43C10.4941 43 0.736328 33.3741 0.736328 21.5Z" fill="#F91212"/>
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 30 20" fill="none">
<path d="M4.23203 25.0745L11.3562 17.9989L7.67253 14.3377L0.548364 21.4185C-0.0362619 21.9995 -0.0362619 22.956 0.548364 23.537L2.0953 25.0745C2.6851 25.6557 3.65258 25.6557 4.23203 25.0745Z" fill="#FEFDFE"/>
<path d="M9.26067 14.4976L11.1905 16.4156L13.3893 14.2302C16.3848 16.2973 20.5341 16.0093 23.2038 13.356C26.1993 10.3787 26.1993 5.53993 23.2038 2.55748C20.2082 -0.424969 15.3398 -0.419827 12.339 2.55748C9.66939 5.21083 9.37967 9.33483 11.4595 12.3121L9.26067 14.4976ZM13.8497 4.03842C16.0227 1.87871 19.546 1.87871 21.7137 4.03842C23.8867 6.19812 23.8867 9.69992 21.7137 11.8545C19.5408 14.0142 16.0175 14.0142 13.8497 11.8545C11.6768 9.69992 11.6768 6.19812 13.8497 4.03842Z" fill="#FEFDFE"/>
</svg>
    </svg>
        </div>

        {/* tabla de los desaparecidos */}
    <div className='contenedor-tabla'>      
      <table>
        <thead>
          <tr>
            <th>N° Reporte</th>
            <th>Fecha De Solicitud</th>
            <th>Nombres(s)</th>
            <th>Apellidos</th>
            <th>Colonia</th>
            <th>Sexo</th>
            <th>Edad</th>                    
            <th>Ficha</th>
            <th>Localizado</th>
          </tr>
        </thead>
        <tbody>
          {desaparecidoFiltrado.length > 0 ? (
            desaparecidoFiltrado.map((desaparecido) => (
                
              <tr className='tr-lista' key={desaparecido.iddesaparecido}>
                
                    <td>{desaparecido.noReporte}</td>
                    <td>{desaparecido.fechaSolicitud}</td>
                    <td>{desaparecido.nombre}</td>   
                    <td>{desaparecido.app} {desaparecido.apm}</td>
                    <td>{desaparecido.colonia}</td>
                    <td>{desaparecido.sexo}</td>
                    <td>{desaparecido.edad}</td>
                    <td>
                        <Link to={`/fichasimpleUs/${desaparecido.iddesaparecido}/${userId}`} className='span-tabla'>
                            <BsTicketDetailed style={{ fontSize: '25px' }}/>
                        </Link>
                    </td>
                    <td>
                    <Link to={`/localizado/${desaparecido.iddesaparecido}/${userId}`} className='span-tabla'>
                            <BiMapPin style={{ fontSize: '25px' }}/>
                        </Link>
                    </td>
              </tr> 
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}><h1>No se encontro resultados</h1></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)

}

export default TablaEs
