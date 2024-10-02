import {React, useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip  } from 'recharts';
import { Button } from '@mui/material';
import { RxExit } from "react-icons/rx";
import './Css/graficadosUs.css';
import logotlajo from './img/logotlajo.png';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const URIdesaparecidosColonia = `http://localhost:8000/desaparecido/colonia/`


const Graficados = () => {
  const { userId,colonia } = useParams();
  const navigate = useNavigate()
  const [datosColonia, setDatosColonia] = useState([]);
  
  

  const [mesBusqueda, setMesBusqueda] = useState(""); // Estado para el mes de búsqueda



  const mesesDelAno = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];


  useEffect(() => {
    axios.get(URIdesaparecidosColonia + `${colonia}`)
      .then(response => {
        const datas = response.data;
       

        setDatosColonia(datas); // Asignar los datos de la API a la variable datosColonia
      })
      .catch(error => {
        console.error('Error al obtener los datos de desaparecidos:', error);
      });
  }, [colonia , mesBusqueda]);


  
  const procesarDatos = (mesFiltro) => {
    const result = {};
  
    mesesDelAno.forEach(mes => {
      result[mes] = {
        '0-20': { hombres: 0, mujeres: 0 },
        '21-40': { hombres: 0, mujeres: 0 },
        '41+': { hombres: 0, mujeres: 0 }
      };
    });
  
    const datosAProcesar = mesFiltro
      ? datosColonia.filter(desaparecido => {
          const mes = new Date(desaparecido.fechaDesaparecido).toLocaleString('default', { month: 'long' }).toLowerCase();
          return mes === mesFiltro.toLowerCase();
        })
      : datosColonia;
  
    datosAProcesar.forEach(desaparecido => {
      const { fechaDesaparecido, sexo, edad } = desaparecido;
      const mes = new Date(fechaDesaparecido).toLocaleString('default', { month: 'long' }).toLowerCase();
  
      const edadCategory = edad <= 20 ? '0-20' : (edad <= 40 ? '21-40' : '41+');
      if (result[mes] && result[mes][edadCategory]) {
        const generoKey = sexo === 'Masculino' ? 'hombres' : 'mujeres';
        result[mes][edadCategory][generoKey]++;
      }
    });
  
    // Filtrar los meses sin datos
    const mesesConDatos = Object.keys(result).filter(mes => {
      const mesData = result[mes];
      return Object.values(mesData).some(categoria => {
        return categoria.hombres > 0 || categoria.mujeres > 0;
      });
    });
  
    // Crear un objeto con los meses filtrados
    const dataFiltrada = {};
    mesesConDatos.forEach(mes => {
      dataFiltrada[mes] = result[mes];
    });
  
    return dataFiltrada;
  };
  
  
  
  const dataProcesada = procesarDatos(mesBusqueda);


  const dataFinal = [];

  Object.keys(dataProcesada).forEach(mes => {
    const mesData = dataProcesada[mes];

    ['0-20', '21-40', '41+'].forEach((edadCategory) => {
      const Hombres = mesData[edadCategory].hombres;
      const Mujeres = mesData[edadCategory].mujeres;
      const combinedLabel = `${mes}\n${edadCategory}`;
      dataFinal.push({ combinedLabel, Hombres, Mujeres });
    });
  });


  const NavigateToGraficaUs = () => {
    navigate(`/graficaUs/${userId}`);
  };

  return (
    <div>
      


      <div className='box-peque2'>
        <div className='box-blanca2'>
          <div className='data-box2'>
            <div className='data-item2'>
              <div className='data-color2 data-red2'></div>
              <span>Masculino</span>
            </div>
            <div className='data-item2'>
              <div className='data-color2 data-yellow2'></div>
              <span>Femenino</span>
            </div>
          </div>
        </div>
        <div className='colonia-box2'>
        <h1 className='colonia-title2'>Edades:</h1>
        <div className='data-item2'>
              <div className='data-color2 data-red3'></div>
              <span>Barra1:0-20</span>
            </div>
            <div className='data-item2'>
              <div className='data-color2 data-red3'></div>
              <span>Barra2:21-40</span>
            </div>
            <div className='data-item2'>
              <div className='data-color2 data-red3'></div>
              <span>Barra3:41+</span>
            </div>
      </div>
      <div className='total-box2'>
      </div>
      </div>
            <div className='nav-grafica2' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fffff' }}>
        <div>
          {/* Aquí se agrega la imagen al navbar */}
          <img src={logotlajo} alt="Logo" style={{ height: '70px', marginRight: '10px' }} />
        </div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
            <li>
              <Button
                variant="contained"
                color="secondary"
                onClick={NavigateToGraficaUs}
                style={{ marginRight: '20px', borderRadius: '5px', background: 'rgba(253, 73, 92, 0.75)', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}
              >
                <RxExit className='iconos' />
              </Button>
            </li>
          </ul>
        </nav>
        
      </div>
      <div className="search-bar3">
          <input style={{borderRadius: '30px'}}
                type="text"
                placeholder="Buscar por mes"
                value={mesBusqueda}
                onChange={(e) => setMesBusqueda(e.target.value)}                
              />
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44 43" fill="none">
            <path d="M0.736328 21.5C0.736328 9.62588 10.4941 0 22.3682 0C34.2423 0 44.0001 9.62588 44.0001 21.5C44.0001 33.3741 34.2423 43 22.3682 43C10.4941 43 0.736328 33.3741 0.736328 21.5Z" fill="#F91212"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 30 20" fill="none">
              <path d="M4.23203 25.0745L11.3562 17.9989L7.67253 14.3377L0.548364 21.4185C-0.0362619 21.9995 -0.0362619 22.956 0.548364 23.537L2.0953 25.0745C2.6851 25.6557 3.65258 25.6557 4.23203 25.0745Z" fill="#FEFDFE"/>
              <path d="M9.26067 14.4976L11.1905 16.4156L13.3893 14.2302C16.3848 16.2973 20.5341 16.0093 23.2038 13.356C26.1993 10.3787 26.1993 5.53993 23.2038 2.55748C20.2082 -0.424969 15.3398 -0.419827 12.339 2.55748C9.66939 5.21083 9.37967 9.33483 11.4595 12.3121L9.26067 14.4976ZM13.8497 4.03842C16.0227 1.87871 19.546 1.87871 21.7137 4.03842C23.8867 6.19812 23.8867 9.69992 21.7137 11.8545C19.5408 14.0142 16.0175 14.0142 13.8497 11.8545C11.6768 9.69992 11.6768 6.19812 13.8497 4.03842Z" fill="#FEFDFE"/>
              </svg>
          </svg>
      
        </div>
      </div>
         
      <h1 className='grafica-titulo2'>{colonia}</h1>
      <div className='grafica-box2'>
        <div className='grafica-wrapper2'>
        <BarChart
            width={1300}
            height={500}
            data={dataFinal}
            margin={{ top: 0, right: 30, left: 20, bottom: 90 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis 
              dataKey='combinedLabel' 
              tick={{ fontSize: 20 }} 
              interval={0} 
              angle={-45} 
              textAnchor="end" 
              tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} // Solo la inicial en mayúscula
            />
            <YAxis type='number' />
            <Tooltip
              contentStyle={{ fontSize: '18px' }}
              labelFormatter={(label) => label.charAt(0).toUpperCase() + label.slice(1)} // Primera letra del mes en mayúscula
              
            />


            <Bar
              dataKey="Hombres"
              stackId="a"
              fill="rgba(77, 74, 224, 1)"
              
            />
            
            <Bar
              dataKey="Mujeres"
              stackId="a"
              fill='rgba(255, 0, 230, 1)'
              
            />


          </BarChart>

           

          
        </div>
      </div>
    </div>
  );
};

export default Graficados;
