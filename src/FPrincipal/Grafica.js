import {React, useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Button } from '@mui/material';
import { RxExit } from "react-icons/rx";
import './Css/grafica.css';
import logotlajo from './img/logotlajo.png';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const URIdesaparecidosTodos = 'http://localhost:8000/desaparecido/'

const Grafica = () => {
  const { userId } = useParams();
  const navigate = useNavigate()
  // Estado para almacenar los datos de desaparecidos de la colonia
  const [coloniaData, setColoniaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  const transformColoniaName = (name) => {
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  

    useEffect(() => {
      axios.get(URIdesaparecidosTodos)
        .then(response => {
          const data = response.data;         
  
          const groupedData = data.reduce((acc, desaparecido) => {
            const colonia = desaparecido.colonia;
            const transformedColonia = transformColoniaName(colonia); // Aplica la transformación de mayúsculas y minúsculas
            acc[transformedColonia] = (acc[transformedColonia] || 0) + 1;
            return acc;
          }, {});
  
          const chartData = Object.keys(groupedData).map(colonia => ({
            name: colonia,
            desaparecidos: groupedData[colonia],
          }));
                   
  
          // Ordena los datos según el nombre de colonia (ascendente)
          
          const filteredChartData = chartData.filter(colonia =>
            colonia.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          const sortedChartData = filteredChartData.slice().sort((a, b) => a.name.localeCompare(b.name));
          setColoniaData(sortedChartData);
          
        }) 
        .catch(error => {
          console.error('Error al obtener los datos de desaparecidos:', error);
        });
    }, [searchTerm]);
  

  const totalDesaparecidos = coloniaData.reduce((total, colonia) => total + colonia.desaparecidos, 0);
  
  const numeroColonias = coloniaData.length; 
  
  const graficaHeight = numeroColonias * 30 + 200; // Ajusta el factor según tus necesidades

  const handleBarClick = (data, index) => {
    // Aquí puedes acceder a la información de la barra en 'data'
    // y el índice de la barra en 'index'.
    
    // Por ejemplo, podrías extraer el nombre de la colonia seleccionada:
    const selectedColonia = data.name;
    
    
    // Luego, puedes redirigir a la página de gráfica detallada,
    // pasando el nombre de la colonia como parámetro en la URL:
    navigate(`/detalle-grafica/${userId}/${selectedColonia}`);
  };

  const capitalizeFirstLetter = (string) => {
    return string
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };


  const NavigateToTabla = () => {
    navigate(`/tabla/${userId}`);
  };


  
  

  return (
    <div>
      <div className='box-peque'>
        <div className='box-blanca'>
          <div className='data-box'>
            <div className='data-item'>
              <div className='data-color data-red'></div>
              <span>Alto</span>
            </div>
            <div className='data-item'>
              <div className='data-color data-yellow'></div>
              <span>Medio</span>
            </div>
            <div className='data-item'>
              <div className='data-color data-green'></div>
              <span>Bajo</span>
            </div>
          </div>
        </div>
          <div className='colonia-box'>
            <h1 className='colonia-title'>Colonias</h1>
            <div className='colonia-number'>{numeroColonias}</div>
          </div>
          <div className='total-box'>
            <h1 className='total-title'>Total:</h1>
            <div className='total-number'>{totalDesaparecidos}</div>
          </div>
      </div>

      <div className='nav-grafica' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fffff' }}>
        <div>
          {/* Aquí se agrega la imagen al navbar */}
          <img src={logotlajo} alt="Logo" style={{ height: '70px', marginRight: '10px' }} />
        </div>
        <div className="search-bar">
      <input
        style={{borderRadius: '30px'}}
        type="text"
        placeholder="Buscar colonia..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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

        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
            <li>
              <Button
                variant="contained"
                color="secondary"
                onClick={NavigateToTabla}
                style={{ marginRight: '20px', borderRadius: '5px', background: 'rgba(253, 73, 92, 0.75)', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}
              >
                <RxExit className='iconos' />
              </Button>
            </li>
          </ul>
        </nav>
      </div><br/>
      <h1 className='grafica-titulo'>Gráfica</h1>

      <div >
        <div className='grafica-wrapper'>
        <BarChart
            width={1200}
            height={graficaHeight}
            data={coloniaData}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis type='number' />
            <YAxis dataKey="name" 
                   type="category"
                   tick={{ fontWeight: 'bold' }} 
                   tickFormatter={(name) => capitalizeFirstLetter(name)}                        
     />
     
            <Tooltip />
            {console.log(coloniaData)}

            <Bar
            dataKey="desaparecidos"
            fill="rgb(0 128 0)"                        
            onClick={(data, index) =>  handleBarClick(data, index)}
            
           />

            
          
          </BarChart>

        </div>
      </div>
      
    </div>
  );
};

export default Grafica; 
