import { React, useState, useEffect, useRef } from 'react';
import './Css/fichacompleja.css';
import logotlajo from './img/logotlajo.png'
import logoGeneral from './img/logoGeneral.png';
import linea_colores from './img/linea_colores.png'
import { useNavigate, useParams } from 'react-router-dom'
import {   Button} from '@mui/material';
import { RxExit } from "react-icons/rx";
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // Importa jsPDF

const URIdesaparecido = 'http://localhost:8000/desaparecido/'
const URIfamiliar = 'http://localhost:8000/familiar/'
const URImfilacion = 'http://localhost:8000/mfilacion/'
const URIcabello = 'http://localhost:8000/cabello/'
const URIojos = 'http://localhost:8000/ojos/'
const URInariz = 'http://localhost:8000/nariz/'
const URIboca =  'http://localhost:8000/boca/'
const URIfrente = 'http://localhost:8000/frente/'
const URIlabios = 'http://localhost:8000/labios/'

const URIsenasParticulares = 'http://localhost:8000/sparticulares/'


const FichaCompleja = () => {
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

            const resFamiliar = await axios.get(URIfamiliar + id);
            setFamiliarData(resFamiliar.data[0]);
            

            const resOjos = await axios.get(URIojos + id)
            setOjosData(resOjos.data[0])

            const resNariz = await axios.get(URInariz + id)
            setNarizData(resNariz.data[0])

            const resBoca = await axios.get(URIboca + id)
            setBocaData(resBoca.data[0])

            const resFrente = await axios.get(URIfrente + id)
            setFrenteData(resFrente.data[0])
            
            const resLabios = await axios.get(URIlabios + id)
            setLabiosData(resLabios.data[0])

            

  
  
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
          //familiar 
          const [familiarData, setFamiliarData] = useState({              
            nombre: '',
            app: '',
            apm: '',
            parentesco: '',
            telefonoUno: '',
            telefonoDos: '',
            correo: '',
            
          })
         
          //mediaFilacion
         const [mediaFilacionData, setMediaFilacionData] = useState({
          complexion:'Complexion',
          colorPiel:'ColorPiel',
          cara:'Cara',
          
        })
         //cabello
         const [cabelloData, setCabelloData] = useState({
          color:'Color',
          forma:'Forma',
          implantacion:'Implantacion',
          calvicie:'Calvicie',
          cantidad:'Cantidad',
        }) 
      //ojos
      const [ojosData, setOjosData]= useState({
        color:'Color',
        forma:'Forma',
        tamano:'Tamano',
      })
      //nariz
      const [narizData, setNarizData] = useState({
        raiz:'Raiz',
        dorso:'Dorso',
        altura:'Altura',
        base:'Base',
        ancho:'Ancho',
      })
      //boca
      const [bocaData, setBocaData] = useState({
        tamano:'Tamano',
        comisuras:'Comisuras',
      })
      //frente
      const [frenteData, setFrenteData] = useState({
        altura:'Altura',
        ancho:'Ancho',
        inclinacion:'Inclinacion',
      })
      //labios
      const [labiosData, setLabiosData] = useState({
        espesor:'Espesor',
        alturaNasoLabial:'Altura Naso Labial',
        prominencia:'Prominencia',        
      })
        
          //senas particulares
        const [sparticularesData, setSParticularesData] = useState([]);

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

        
        


  const NavigateToTabla = () => {
    navigate(`/actualizar/${id}/${userId}`);
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
        </div>

        <div className='box2' ref={contentRef}>
          <h1 className='titulo2' >Ficha de busqueda: {desaparecidoData.noReporte}/{desaparecidoData.fechaDesaparecido}</h1><br/>
          <h1 className='titulo3' >Fecha del expediente: {desaparecidoData.noReporte}/{desaparecidoData.fechaDesaparecido}</h1>
                  <div className="image-container">
                      <img
                      src={linea_colores}
                      alt="Barra de colores"
                      style={{ width: '27%', height: '5px', marginLeft: '10px', marginTop:'40px'  }}
                      />
                  </div><br />
              <div class="container1">
              <h2>Media filacion:</h2>
              <div class="">
                  <p>Complexión: {mediaFilacionData.complexion}</p>
                  <p>Estatura: {desaparecidoData.estatura} mts</p>
                  <p>Peso: {desaparecidoData.peso} kgs</p>
                  <p>Cabello: {cabelloData.forma}, {cabelloData.color}, {cabelloData.cantidad} </p>
                  <p>Cara: {mediaFilacionData.cara}</p>
                  <p>Frente: {frenteData.altura}</p>                  
                  <p>Tez: {mediaFilacionData.colorPiel}</p>
                  <p>Ojos: {ojosData.forma},  {ojosData.color}, {ojosData.tamano}</p>
                  <p>Nariz: {narizData.raiz}</p>
                  <p>Boca: {bocaData.tamano}, {bocaData.comisuras}</p>
                  <p>Labios: {labiosData.espesor} </p>
              </div>
              </div>
              <div class="container2">
              <h2>Vestimenta:</h2>
              <div class="">
                  <p>{desaparecidoData.vestimenta}</p>
              </div>
              </div>
              <div class="container3">
              <h2>Señas particulares:</h2>
              <div class="">
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
              </div>
              <div class="container5">
              <h2>Descripcion de los echos: </h2>
              <div class="">
                  <p>{desaparecidoData.descripcion}</p>
              </div>
              </div>
              <div class="container6">
              <h2>Notas adicionales:</h2>
              <div class="">
                  <p></p>
              </div>
              </div>

        <div className='columna2'>
        <p>Expediente: {desaparecidoData.noReporte}/{desaparecidoData.fechaDesaparecido}</p>
        <p>C.I. : {desaparecidoData.noReporte}/{desaparecidoData.fechaDesaparecido}</p>
        <p>Fecha de reporte: {desaparecidoData.noReporte}</p>
        <p>Fecha de desaparecido: {desaparecidoData.fechaDesaparecido}</p>
        </div>
        <div className='columna'>
        <p>Reportante: {familiarData.nombre} {familiarData.app} {familiarData.apm}</p>
        <p>Parentesco: {familiarData.parentesco}</p>
        <p>Telefono Cel:{familiarData.telefonoUno} </p>
        <p>Telefono Fijo: {familiarData.telefonoDos}</p>
        </div>
        <div>
        <img className='logo-general1'
            src={logoGeneral}
            alt="logoGeneral"
          />
        </div> 

        {/*imagen del desaparecido para mostrar */}
        <div className='upload-container'>
            <div className="upload-box5">
              <input  id="file-upload" className="file-input"></input>
              <label htmlFor="file-upload" className="upload-label">
                {desaparecidoData.urlFoto && <img src={desaparecidoData.urlFoto} alt="Desaparecido" className="preview-image upload-image"/>}
              </label>
            </div>
          </div>
          
        <div className='letras'>
        <p>Nombre: {desaparecidoData.nombre} {desaparecidoData.app} {desaparecidoData.apm} </p>
        <p>Edad al desaparecer: {desaparecidoData.edad}</p>
        <p>Telefonos: </p>
        <p>Red social:</p>
        </div>
        </div>
    </div>
    )
}



export default FichaCompleja;
