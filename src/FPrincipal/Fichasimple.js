import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { RxExit } from 'react-icons/rx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // Importa jsPDF
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../FPrincipal/Css/fichas.css';
import logotlajo from './img/logotlajo.png';
import logoGeneral from './img/logoGeneral.png';
import linea_colores from './img/linea_colores.png';


const URIdesaparecido = 'http://localhost:8000/desaparecido/'
const URImfilacion = 'http://localhost:8000/mfilacion/'
const URIcabello = 'http://localhost:8000/cabello/'
const URIsenasParticulares = 'http://localhost:8000/sparticulares/'

const Fichasimple = () => {
    const navigate = useNavigate() 
    const {id,userId} = useParams()
    
    const contentRef = useRef(null);   


    /*usamos el estado de la informacionde la base de datos */
    useEffect(() => {
      const getDesaparecidoById = async () => {
        try {
          const res = await axios.get(URIdesaparecido + id);
          setDesaparecidoData(res.data); 
          
          
          

          //Transforma la URL de la imagen aquí antes de establecer el estado
          const transformedData = {
            ...res.data,
            urlFoto: res.data.urlFoto.replace(/\\/g, '/'),
          };
          setDesaparecidoData(transformedData);

          const resMfilacion = await axios.get(URImfilacion + id);
          setMediaFilacionData(resMfilacion.data[0])

          

          const resCabello = await axios.get(URIcabello + id)
          setCabelloData(resCabello.data[0])


          const resSParticulares = await axios.get(URIsenasParticulares + id)
          setSParticularesData(resSParticulares.data)
          
                     
          
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };      
      getDesaparecidoById();     
    }, [id]);


        //desaparecido
        const [desaparecidoData, setDesaparecidoData] = useState({        
          nombre: '',
          app: '',
          apm: '',
          noReporte: '', 
          sexo:'',     
          fechaNacimiento: '',
          edad: '',
          estatura: '',
          peso:'',
          fechaSolicitud: '',
          colonia: '',
          fechaDesaparecido: '',
          dedicacion: '',
          vestimenta: '',
          residente:'',
          descripcion: '',
          urlFoto: '',  
        })
        const DesaparecidoDataChange = (event) => {
          const { name, value } = event.target;        
          
            setDesaparecidoData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          
        };
        //mediaFilacion
       const [mediaFilacionData, setMediaFilacionData] = useState({
        complexion:'Complexion',
        colorPiel:'ColorPiel',
        cara:'Cara',
        
      })  
      const mediaFilacionDataChange = (event) => {
        const {name, value} = event.target;
        setMediaFilacionData((prevData)=>({
          ...prevData,
          [name] : value,
        }))
      } 
        //senas particulares
        const [sparticularesData, setSParticularesData] = useState([]);     

        //cabello
      const [cabelloData, setCabelloData] = useState({
        color:'Color',
        forma:'Forma',
        implantacion:'Implantacion',
        calvicie:'Calvicie',
        cantidad:'Cantidad',
      })
      const cabelloDataChange = (event) => {
        const {name, value} = event.target;
        setCabelloData((prevData)=>({
          ...prevData,
          [name]: value,  
        }))               
      } 
      const handleDownloadPDF = async () => {
        if (contentRef.current) {
          const image = new Image();
          image.src = desaparecidoData.urlFoto;
    
          await image.decode();
          console.log('Image loaded:', image);
    
          html2canvas(contentRef.current, { useCORS: true } ).then((canvas) => {
            console.log('Captured canvas:', canvas);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('ficha.pdf');
          });
        }
      }; 
      const NavigateToActualizar = () => {
        navigate(`/actualizar/${id}/${userId}`);
      };
      const NavigateToFichaCompleta = () => {
        navigate(`/fichacompleta/${id}/${userId}`);
      };

  return (


    <div>
        <div className='nav-grafica' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fffff' }}>
          <div>
            {/* Aquí se agrega la imagen al navbar */}
            <img src={logotlajo} alt="Logo" style={{ height: '70px', marginRight: '10px' }} />
          </div>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
              <li>
                <Button variant='contained' color='success' onClick={handleDownloadPDF} style={{ marginRight: '20px', borderRadius: '5px'}}>
                    Descargar Ficha
                </Button>
              </li>
              <li>
                <Button variant="contained" color='info' onClick={NavigateToFichaCompleta}  style={{ marginRight: '20px', borderRadius: '5px'}}>
                  Ficha Completa
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={NavigateToActualizar}
                  style={{ marginRight: '20px', borderRadius: '5px', background: 'rgba(253, 73, 92, 0.75)', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}
                >
                  <RxExit className='iconos' />
                </Button>
                
              </li>
            </ul>
          </nav>
        </div>


        <div className='box' ref={contentRef}>
              
            <div>
              <div>
                <h1 className='titulosimple' onChange={DesaparecidoDataChange}>Ficha de busqueda: {desaparecidoData.noReporte}/{desaparecidoData.fechaSolicitud}</h1>
              </div>            
              <br/><br/>
              <div className="image-container">
                <img
                  src={linea_colores}
                  alt="Barra de colores"
                  style={{ width: '25%', height: '5px', marginLeft: '10px',marginTop: '20px' }}
                />
              </div>
            </div>
            
          <div className="text-container">
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='nombre' onChange={DesaparecidoDataChange}>Nombre:  </h3>
              <p style={{ position: 'absolute', top: '-17px', left: '80px' }}>{desaparecidoData.nombre} {desaparecidoData.app} {desaparecidoData.apm}</p>                             
            </div>
            <div style={{ position: 'relative' }}>
              <h3  name='edad' onChange={DesaparecidoDataChange}>Edad:  </h3>
              <p style={{ position: 'absolute', top: '-17px', left: '55px' }}>{desaparecidoData.edad}</p>                             
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <h3>Señas Particulares:</h3>
              {sparticularesData.map((seña, index) => (
                <div key={index} style={{ display: 'flex', padding: '3px'}}>
                  <div style={{ marginRight: '10px' }}>
                    <p><strong>{seña.tipo}:</strong></p>
                  </div>
                  <div style={{ marginRight: '10px' }}>
                    <p> {seña.descripcion},</p>
                  </div>
                </div>
              ))}
            </div>
          
            <div style={{ position: 'relative' }}>
              <h3  name='cabello' onChange={cabelloDataChange}>Cabello:  </h3>                             
              <p style={{ position: 'absolute', top: '-16px', left: '75px' }}>{cabelloData.forma}, {cabelloData.cantidad}, {cabelloData.color }</p>
            </div>            
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='colorPiel' onChange={mediaFilacionDataChange}>Tez:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '45px' }}>{mediaFilacionData.colorPiel}</p>                             
            </div>    
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='complexion' onChange={mediaFilacionDataChange}>Complexión:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '110px' }}>{mediaFilacionData.complexion}</p>                             
            </div>
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='estatura' onChange={DesaparecidoDataChange}>Estatura:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '85px' }}>{desaparecidoData.estatura}</p>                             
            </div>
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='vestimenta' onChange={DesaparecidoDataChange}>Vestimenta:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '100px' }}>{desaparecidoData.vestimenta}</p>                             
            </div>            
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='descripcion' onChange={DesaparecidoDataChange}>Se le vio por última vez:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '200px' }}>{desaparecidoData.descripcion}</p>                             
            </div>
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='fecha' onChange={DesaparecidoDataChange}>Fecha de Desaparición:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '190px' }}>{desaparecidoData.fechaDesaparecido}</p>                             
            </div>
            <div style={{ position: 'relative' }}>
              <h3 style={{ marginBottom: '10px' }} name='colonia' onChange={DesaparecidoDataChange}>Lugar:  </h3>
              <p style={{ position: 'absolute', top: '-16px', left: '63px' }}>{desaparecidoData.colonia}</p>                             
            </div>            
            
           
          </div>
          <div className="box-azul">
          <p className="white-text1">  Reporta cualquier información sobre la persona: 33 3145 6314 comisiondebusqueda@jalisco.gob.mx </p>
          </div>
          <div>
          <img className='logo-general'
              src={logoGeneral}
              alt="logogeneral"
            />
          </div>
          
          {/*imagen del desaparecido para mostrar */}
          <div className='upload-container'>
            <div className="upload-box">
              <input  id="file-upload" className="file-input"></input>
              <label htmlFor="file-upload" className="upload-label">
                {desaparecidoData.urlFoto && <img src={desaparecidoData.urlFoto} alt="Desaparecido" className="preview-image upload-image"/>}
              </label>
            </div>
          </div>
          
          
          <div className="text-box">
            <br></br>
            <h2>Persona Desaparecida</h2>
            <div className="blue-box1">
              <p className="white-text">¿Lo has visto?</p>
            </div>
            <div className="blue-box2">
              <p className="white-text">Ayúdanos a encontrarlo</p>
            </div>
            <p>Esta cédula es pública con la autorización por escrito de los familiares</p>
          </div>
          
        </div>

       

    </div>
  );
}

export default Fichasimple;
