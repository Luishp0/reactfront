import React, { useState } from 'react';
import './Css/principalUs.css';
import linea_colores from './img/linea_colores.png';
import { TextField, FormControlLabel, Checkbox, FormLabel, Select, MenuItem, Button, Grid } from '@mui/material';
import { PiCameraPlusBold } from "react-icons/pi";
import './Css/navbarBotones.css';
import { PiAddressBookBold } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { VscSaveAs } from "react-icons/vsc";
import Swal from 'sweetalert2';


function Principal() {
  //idusuario logiado
  const { userId } = useParams(); 
  const navigate = useNavigate()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

 
        //desaparecido
        const [desaparecidoData, setDesaparecidoData] = useState({
          //tabla desaparecido aqui completar con toda la informacion del formulario
          iddesaparecido: '',
          nombre: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          sexoMasculino: false,
          sexoFemenino: false,
          fechaNacimiento: '',
          edad: '',
          estatura: '',
          peso:'',
          fechaSolicitud: '',
          colonia: '',
          fechaDesaparecio: '',
          dedicacion: '',
          vestimenta: '',
          residenteSi: false,
          residenteNo: false,
          descripcion: '',
          urlFoto: '',    
          });
          const DesaparecidoDataChange = async (event) => {
            const { name, value, type, checked } = event.target;
          
            if (name === 'colonia') {
              const capitalizedValue = capitalizeFirstLetter(value);
              setDesaparecidoData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : capitalizedValue,
              }));
            } else {
              setDesaparecidoData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
              }));
            }
          };
          
        //familiar 
        const [familiarData, setFamiliarData] = useState({ 
          idfamiliar:'',          
          nombre: '',
          app: '',
          apm: '',
          parentesco: '',
          telefonoUno: '',
          telefonoDos: '',
          correo: '',
          
        });
        const FamiliarDataChange = (event) => {
          const { name, value } = event.target;          
        
          setFamiliarData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }; 
        //domicilio
        const [domicilioData, setDomicilioData]= useState({
        
          calle:'',
          nointerior:'',
          noexterior:'',
          colonia:'',
          codigopostal:'',
        })
        const DomicilioDataChange = (event) =>{
          const { name, value} = event.target;
          setDomicilioData((prevData) => ({
            ...prevData,
             [name]: value,
          }))
        } 
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
      //Cejas
      const [cejasData, setCejasData] =useState({
        forma:'Forma',
        direccion:'Direccion',
        implantacion:'Implantacion',
        tamano:'Tamano',
      })    
      const cejasDataChange = (event)=>{
        const {name, value} = event.target;
        setCejasData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //ojos
      const [ojosData, setOjosData]= useState({
        color:'Color',
        forma:'Forma',
        tamano:'Tamano',
      })
      const ojosDataChange = (event)=>{
        const {name, value} = event.target;
        setOjosData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //nariz
      const [narizData, setNarizData] = useState({
        raiz:'Raiz',
        dorso:'Dorso',
        altura:'Altura',
        base:'Base',
        ancho:'Ancho',
      })
      const narizDataChange = (event)=>{
        const {name, value} = event.target;
        setNarizData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //boca
      const [bocaData, setBocaData] = useState({
        tamano:'Tamano',
        comisuras:'Comisuras',
      })
      const bocaDataChange = (event)=>{
        const {name, value} = event.target;
        setBocaData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //frente
      const [frenteData, setFrenteData] = useState({
        altura:'Altura',
        ancho:'Ancho',
        inclinacion:'Inclinacion',
      })
      const frenteDataChange = (event)=>{
        const {name, value} = event.target;
        setFrenteData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //labios
      const [labiosData, setLabiosData] = useState({
        espesor:'Espesor',
        alturaNasoLabial:'Altura Naso Labial',
        prominencia:'Prominencia',        
      })
      const labiosDataChange = (event)=>{
        const {name, value} = event.target;
        setLabiosData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //menton
      const [mentonData, setMentonData] = useState({
        forma:'Forma',
        inclinacion:'Inclinacion',
        tipos:'Tipo',
      })
      const mentonDataChange = (event)=>{
        const {name, value} = event.target;
        setMentonData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //orejas
      const [orejasData, setOrejasData] = useState({
        forma:'Forma',
      })
      const orejasoDataChange = (event)=>{
        const {name, value} = event.target;
        setOrejasData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //lobulo
      const [lobuloData, setLobuloData] = useState({
        adherencia:'Adherencia',
        dimension:'Dimension',
        particularidad:'Particularidad',
        contorno:'Contorno',
      })
      const lobuloDataChange = (event)=>{
        const {name, value} = event.target;
        setLobuloData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //herix
      const [herixData, setHerixData] = useState({       
        superior:'Superior',
        posterior:'Posterior',
        adherencia:'Adherencia',
      })
      const herixDataChange = (event)=>{
        const {name, value} = event.target;
        setHerixData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }
      //senas particulares
      const [sparticularesData, setSParticularesData] = useState([]);

      const spCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const spData = sparticularesData.find((sp) => sp.tipo === name);
    
        if (checked) {
          if (!spData) {
            setSParticularesData((prevData) => [
              ...prevData,
              { tipo: name, descripcion: '', urlFoto: '' },
            ]);
          }
        } else {
          if (spData) {
            setSParticularesData((prevData) =>
              prevData.filter((sp) => sp.tipo !== name)
            );
          }
        }
      };
    
      const spDescripcionChange = (event, tipo) => {
        const { value } = event.target;
        setSParticularesData((prevData) =>
          prevData.map((sp) =>
            sp.tipo === tipo ? { ...sp, descripcion: value } : sp
          )
        );
      };

      const [selectedFile, setSelectedFile] = useState(null);  // <-- Cambia el nombre para mayor claridad
      // nuevo estado para manejar archivo de la imagen
      const [selectedImage, setSelectedImage] = useState(null);
      // funcion para manejar cambios en la imagen
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);  // <-- Guarda el archivo, no la URL
        setSelectedImage(URL.createObjectURL(file));  // <-- Solo para la visualización

        
        console.log('Imagen seleccionada:', file);
      };
      

  /////*******///procedimiento para guardar desaparecido /////////////******* */
  const storeDesaparecido = async (e) => {
    e.preventDefault();  
        

    try {
      console.log('selectedImage:', selectedFile);
    // tabla como esta en la base de datos////////////////////
      
      // Validación de campos vacíos
    if (
      desaparecidoData.nombre.trim() === '' ||
      desaparecidoData.apellidoPaterno.trim() === '' ||
      desaparecidoData.apellidoMaterno.trim() === '' ||
      desaparecidoData.colonia.trim() === '' ||
      desaparecidoData.dedicacion.trim() === '' ||
      desaparecidoData.descripcion.trim() === '' ||
      desaparecidoData.edad.trim() === '' ||
      desaparecidoData.estatura.trim() === '' ||
      desaparecidoData.fechaDesaparecio.trim() === '' ||
      desaparecidoData.fechaNacimiento.trim() === '' ||
      desaparecidoData.fechaSolicitud.trim() === '' ||
      desaparecidoData.peso.trim() === '' ||
      desaparecidoData.vestimenta.trim() === ''      
      
    ) {
      Swal.fire('Error', 
                'Debes Completar todos los campos de datos generales', 
                'error');
      return;
    }
    // Validación de checkboxes
    if (!desaparecidoData.sexoMasculino && !desaparecidoData.sexoFemenino) {
      Swal.fire('Error', 
                'Debes Completar todos los campos de datos generales', 
                'error');
      return;
    }
    if(!desaparecidoData.residenteNo && !desaparecidoData.residenteSi){
      Swal.fire('Error', 
                'Debes Completar todos los campos de datos generales', 
                'error');
      return;
    }
    // Realizar validaciones en el lado del cliente
    if (!selectedFile) {
      // Mostrar una alerta con SweetAlert2 indicando que se debe seleccionar una imagen
      Swal.fire('Error', 'Debes seleccionar una imagen', 'error');
      return; // Detener el proceso si falta la imagen
    }
    if(
      familiarData.nombre.trim() === '' ||
      familiarData.apm.trim() === '' ||
      familiarData.app.trim() === '' ||
      familiarData.correo.trim() === '' ||
      familiarData.parentesco.trim() === '' ||
      familiarData.telefonoUno.trim() === ''
    ){
      Swal.fire('Error', 
                'Debes Completar todos los campos de datos del familiar', 
                'error');
      return;
    }
    if(
      domicilioData.calle.trim() === '' ||
      domicilioData.codigopostal.trim() === '' ||
      domicilioData.colonia.trim() === '' ||
      domicilioData.noexterior.trim() === '' ||
      domicilioData.nointerior.trim() === ''
    ){
      Swal.fire('Error', 
                'Debes Completar todos los campos del domicilio del familiar', 
                'error');
      return;
    }
    if(
      mediaFilacionData.cara.trim() === 'Complexion' ||
      mediaFilacionData.colorPiel.trim() === 'ColorPiel' ||
      mediaFilacionData.cara.trim() === 'Cara'
    ){
      Swal.fire('Error', 
                'Debes Completar todos los campos de mediafilacion', 
                'error');
      return;
    }
    if(
      cabelloData.calvicie.trim() === 'Color' ||
      cabelloData.forma.trim() === 'Forma' ||
      cabelloData.implantacion.trim() === 'Implantacion' ||
      cabelloData.calvicie.trim() === 'Calvicie' ||
      cabelloData.cantidad.trim() === 'Cantidad'

    ){
      Swal.fire('Error', 
                'Debes Completar todos los campos de cabello', 
                'error');
      return;
    }
    if(
      cejasData.direccion.trim() === 'Direccion' ||
      cejasData.forma.trim() === 'Forma' ||
      cejasData.implantacion.trim() === 'Implantacion' ||
      cejasData.tamano.trim() === 'Tamano'
    ){
      Swal.fire('Error', 
                'Debes Completar todos los campos de cejas', 
                'error');
      return;
    }
    if(
      ojosData.color.trim() === 'Color' ||
      ojosData.forma.trim() === 'Forma' ||
      ojosData.tamano.trim() === 'Tamano'
    ){
      Swal.fire('Error', 
                'Debes Completar todos los campos de ojos', 
                'error');
      return;
    }
    if(
      narizData.altura.trim() === 'Altura' ||
      narizData.ancho.trim() === 'Ancho' ||
      narizData.base.trim() === 'Base' ||
      narizData.dorso.trim() === 'Dorso' ||
      narizData.raiz.trim() === 'Raiz'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de ojos', 
      'error');
      return;
    }
    if(
      bocaData.comisuras.trim() === 'Comisuras' ||
      bocaData.tamano.trim() === 'Tamano'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de boca', 
      'error');
      return;
    }
    if(
      frenteData.altura.trim() === 'Altura' ||
      frenteData.ancho.trim() === 'Ancho' ||
      frenteData.inclinacion.trim() === 'Inclinacion'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de frente', 
      'error');
      return;
    }
    if(
      labiosData.alturaNasoLabial.trim() === 'Altura Naso Labial' ||
      labiosData.espesor.trim() === 'Espesor' ||
      labiosData.prominencia.trim() === 'Prominencia'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de labios', 
      'error');
      return;
    }
    if(
      mentonData.forma.trim() === 'Forma' ||
      mentonData.inclinacion.trim() === 'Inclinacion' ||
      mentonData.tipos.trim() === 'Tipo'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de menton', 
      'error');
      return; 
    }
    if(
      orejasData.forma.trim() === 'Forma'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de orejas', 
      'error');
      return; 
    }
    if(
      lobuloData.adherencia.trim() === 'Adherencia' ||
      lobuloData.contorno.trim() === 'Contorno' ||
      lobuloData.dimension.trim() === 'Dimension' ||
      lobuloData.particularidad.trim() === 'Particularidad'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de lobulos', 
      'error');
      return;
    }
    if(
      herixData.adherencia.trim() === 'Adherencia' ||
      herixData.posterior.trim() === 'Posterior' ||
      herixData.superior.trim() === 'Superior'
    ){
      Swal.fire('Error', 
      'Debes Completar todos los campos de herix', 
      'error');
      return;
    }  

      
      const desaparecido = {
        usuario_idusuario: userId,
        nombre : desaparecidoData.nombre,
        app : desaparecidoData.apellidoPaterno,
        apm : desaparecidoData.apellidoMaterno,
        sexo : sexoSeleccionado,
        fechaNacimiento : desaparecidoData.fechaNacimiento,
        edad : desaparecidoData.edad,
        estatura : desaparecidoData.estatura,
        peso : desaparecidoData.peso,
        fechaSolicitud : desaparecidoData.fechaSolicitud,
        colonia : desaparecidoData.colonia,
        fechaDesaparecido : desaparecidoData.fechaDesaparecio,
        dedicacion : desaparecidoData.dedicacion,
        vestimenta : desaparecidoData.vestimenta,
        residente : residenteSeleccionado,      
        descripcion : desaparecidoData.descripcion,
        urlFoto : '',
      }  
  
      const response = await axios.post('http://localhost:8000/desaparecido/', desaparecido);
      const iddesaparecidoCreado = response.data.iddesaparecido;
      const noreporte = response.data.noReporte;

      console.log(noreporte)
      const formData = new FormData();
      formData.append('noReporte', noreporte);
      formData.append('image', selectedFile);
  
      const response0 = await axios.post('http://localhost:8000/guardarimagen/', formData);
      const imageUrl = response0.data.imageUrl;
      
      // Actualiza el estado desaparecidoData con la URL de la imagen
      setDesaparecidoData((prevData) => ({
        ...prevData,
        urlFoto: imageUrl,
      }));
  
      // Actualiza el objeto desaparecido con la URL de la imagen
      desaparecido.urlFoto = imageUrl;
  
      // Actualiza la entrada en la base de datos con la URL de la imagen
      await axios.put(`http://localhost:8000/desaparecido/${iddesaparecidoCreado}`, desaparecido);
    
      const familiar = {        
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        nombre: familiarData.nombre,
        app: familiarData.app,
        apm: familiarData.apm,
        parentesco: familiarData.parentesco,
        telefonoUno: familiarData.telefonoUno,
        telefonoDos: familiarData.telefonoDos,
        correo: familiarData.correo,
      }

      const response2 = await axios.post('http://localhost:8000/familiar/',familiar)  
      const idfamiliarCreado = response2.data.idfamiliar;      

      const domicilio = {
        familiar_idfamiliar: idfamiliarCreado,
        calle: domicilioData.calle,
        nointerior: domicilioData.nointerior,
        noexterior: domicilioData.noexterior,
        colonia: domicilioData.colonia,
        codigopostal: domicilioData.codigopostal
      }
      await axios.post('http://localhost:8000/domicilio/',domicilio)

      const mediafilacion ={
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        complexion: mediaFilacionData.complexion,
        colorPiel: mediaFilacionData.colorPiel,
        cara: mediaFilacionData.cara,
       

      }
      await axios.post('http://localhost:8000/mfilacion/', mediafilacion)

      const cabello = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        color: cabelloData.color,
        forma: cabelloData.forma,
        implantacion: cabelloData.implantacion,
        calvicie: cabelloData.calvicie,
        cantidad: cabelloData.cantidad,
      }
      await axios.post('http://localhost:8000/cabello/', cabello)

      const cejas ={
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        forma: cejasData.forma,
        direccion: cejasData.direccion,
        implantacion: cejasData.implantacion,
        tamano: cejasData.tamano,
      }
      await axios.post('http://localhost:8000/cejas/', cejas)

      const ojos = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        color: ojosData.color,
        forma: ojosData.forma,
        tamano: ojosData.tamano,
      }
      await axios.post('http://localhost:8000/ojos/',ojos)

      const nariz = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        raiz: narizData.raiz,
        dorso: narizData.dorso,
        altura: narizData.altura,
        base: narizData.base,
        ancho: narizData.ancho,
      }
      await axios.post('http://localhost:8000/nariz/', nariz)

      const boca = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        tamano: bocaData.tamano,
        comisuras: bocaData.comisuras,
      }
      await axios.post('http://localhost:8000/boca/', boca)

      const frente = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        altura: frenteData.altura,
        ancho: frenteData.ancho,
        inclinacion: frenteData.inclinacion,
      }
      await axios.post('http://localhost:8000/frente/', frente)

      const labios = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        espesor: labiosData.espesor,
        alturaNasoLabial: labiosData.alturaNasoLabial,
        prominencia: labiosData.prominencia,
      }
      await axios.post('http://localhost:8000/labios/', labios)

      const menton = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        forma: mentonData.forma,
        inclinacion: mentonData.inclinacion,
        tipos: mentonData.tipos,
      }
      await axios.post('http://localhost:8000/menton/', menton)

      const orejas = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        forma: orejasData.forma,
      }
      await axios.post('http://localhost:8000/orejas/', orejas)

      const lobulo = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        adherencia: lobuloData.adherencia,
        dimension: lobuloData.dimension,
        particularidad: lobuloData.particularidad,
      }
      await axios.post('http://localhost:8000/lobulo/', lobulo)

      const herix = {
        desaparecido_iddesaparecido: iddesaparecidoCreado,
        contorno: herixData.contorno,
        superior: herixData.superior,
        posterior: herixData.posterior,
        adherencia: herixData.adherencia,
      }
      await axios.post('http://localhost:8000/herix/', herix)

      for (const spData of sparticularesData) {
        const sparticulares = {
          desaparecido_iddesaparecido: iddesaparecidoCreado,
          descripcion: spData.descripcion,
          tipo: spData.tipo,
          urlFoto: spData.urlFoto,
        };
       await axios.post('http://localhost:8000/sparticulares/', sparticulares)
     
      }

      // Mostrar alerta de éxito con SweetAlert2
      Swal.fire('¡Éxito!', 'La información se ha guardado correctamente', 'success');
      
      navigate(`/tablaUs/${userId}`);
    } catch (error) {
      // Manejo de errores, si es necesario
      Swal.fire('Error', 'Hubo un error al guardar la información', 'error');
      console.error('Error al guardar el desaparecido:', error);
    }
  };

  // Obtener los datos del checkbox seleccionado del sexo
const obtenerSexoSeleccionado = () => {
  if (desaparecidoData.sexoMasculino) {
    return "Masculino";
  } else if (desaparecidoData.sexoFemenino) {
    return "Femenino";
  } else {
    return "No seleccionado";
  }
};
// Uso de la función obtenerSexoSeleccionado
const sexoSeleccionado = obtenerSexoSeleccionado();
// Obtener los datos del checkbox seleccionado de si es residente
const obtenerResidenteSelecionado = () =>{
  if(desaparecidoData.residenteSi){
    return "Si Recurrente"
  }else if(desaparecidoData.residenteNo){
    return "No Recurrente"
  }
}
//uso de la funcion ObtenerResidenteSelecionado
const residenteSeleccionado = obtenerResidenteSelecionado();

  const SexoMasculinoChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      sexoMasculino: event.target.checked,
      sexoFemenino: false,
    }));
  };
  const SexoFemeninoChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      sexoFemenino: event.target.checked,
      sexoMasculino: false,
    }));
  };
  const ResidenteSiChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      residenteSi: event.target.checked,
      residenteNo: false,
    }));
  };
  const ResidenteNoChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      residenteNo: event.target.checked,
      residenteSi: false,
    }));
  };  


  const NavigateToTabla = () => {
    navigate(`/tablaUs/${userId}`);
  };

  return (    
      
     <div> 
             
        <div className="navbar-wrapper"  style={{ display: 'flex', justifyContent: 'flex-end',  }}>
         
          <nav>
            <ul>
              <Button  onClick={storeDesaparecido}   variant="contained" color="secondary"  style={{ marginRight: '20px', marginTop: '5px', borderradius: '5px' ,background: 'rgba(253, 73, 92, 0.75)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)'}}>
                <VscSaveAs className='iconos'/>
                Guardar
              </Button>
              <Button variant="contained" color="secondary" onClick={NavigateToTabla} style={{ marginRight: '20px', marginTop: '5px', borderradius: '5px' ,background: 'rgba(112, 212, 75, 0.75)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}>
                <PiAddressBookBold className='iconos'/>
                Tabla
              </Button>
              <Button variant="contained" color="secondary" href="/" style={{ marginRight: '50px', marginTop: '5px', borderradius: '5px' ,background: 'rgba(241,138,0, 0.75)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)'   }}>
                <RxExit className='iconos'/>
                Salir
              </Button>
            </ul>
          </nav>      
        </div>

     <div className="container">
      
      <h1 id='datosgenerales'>Datos Generales </h1><br/><br/>
      <div className="image-container">
        <img
          src={linea_colores}
          alt="Barra de colores"
          style={{ width: '30%', height: '5px' }}
        /> <p style={{color:'red', right:'500px'}}>(*) Campos obligatorios</p> 
      </div><br/>
      <form>
        <TextField style={{ marginRight: '30px' }}
          label="Nombre(s)"
          id="outlined-size-small"
          variant="outlined"
          name='nombre'
          size="small"
          onChange={DesaparecidoDataChange}
          value={desaparecidoData.nombre}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Paterno"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="apellidoPaterno"
          value={desaparecidoData.apellidoPaterno}
          onChange={DesaparecidoDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Materno"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="apellidoMaterno"
          value={desaparecidoData.apellidoMaterno}
          onChange={DesaparecidoDataChange}
          required
        />
      
         <TextField style={{ marginRight: '30px', width: '200px' }}
          id="date"
          label="Fecha De Solicitud"
          type="date"
          name="fechaSolicitud"
          value={desaparecidoData.fechaSolicitud}
          onChange={DesaparecidoDataChange}
          InputLabelProps={{
            shrink: true,
          }}
          required
          size="small"
        />    
        <br/><br/>
        <FormLabel component="legend" required>Sexo</FormLabel>
        <FormControlLabel
          control={<Checkbox 
          name="sexoMasculino" 
          checked={desaparecidoData.sexoMasculino}
          onChange={SexoMasculinoChange} />}
          label="Maculino"
         
        />
        <FormControlLabel style={{ marginRight: '30px' }}
          control={<Checkbox 
            name="sexoFemenino"
            checked={desaparecidoData.sexoFemenino}
            onChange={SexoFemeninoChange}/>}
          label="Femenino"
          
        />
        <TextField style={{ marginRight: '30px', width: '200px' }}
          id="date"
          label="Fecha De Nacimiento"
          type="date"
          name="fechaNacimiento"
          value={desaparecidoData.fechaNacimiento}
          onChange={DesaparecidoDataChange}
          InputLabelProps={{
            shrink: true,
          }}
          required
          size="small"
        />
        <TextField style={{ marginRight: '30px', width: '110px' }}
          label="Edad"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="edad"
          value={desaparecidoData.edad}
          onChange={DesaparecidoDataChange}
          required
        />
        <TextField style={{ marginRight: '30px', width: '130px' }}
          label="Estatura(cm)"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="estatura"
          value={desaparecidoData.estatura}
          onChange={DesaparecidoDataChange}
          required
        />
        <TextField style={{ marginRight: '0px', width: '130px' }}
          label="Peso"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="peso"
          value={desaparecidoData.peso}
          onChange={DesaparecidoDataChange}
          required
        />
           
        {/* subir imagen        */}
        
        <div className="upload-boxxxx">
          
          {selectedImage && <img src={selectedImage} alt="selectedImage" className="preview-image"  />}
          <input
            type="file"
            id="file-upload"
            className="file-input"
            accept="image/*"
            onChange={handleImageChange}
            
          />
          <label htmlFor="file-upload" className="upload-label">
            <PiCameraPlusBold className="iconn" />
          </label>
      </div>      
        <br></br><br></br>
        <FormLabel component="legend">Lugar de los Hechos</FormLabel><br></br>
        <TextField style={{ marginRight: '30px' }}
          label="Colonia"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="colonia"
          value={desaparecidoData.colonia}
          onChange={DesaparecidoDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="¿A qué se dedica?"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name='dedicacion'
          value={desaparecidoData.dedicacion}
          onChange={DesaparecidoDataChange}
          required
        />
        <TextField style={{ marginRight: '30px', width: '200px' }}
          id="date"
          label="Fecha De Desaparecido"
          type="date"
          name='fechaDesaparecio'
          value={desaparecidoData.fechaDesaparecio}
          onChange={DesaparecidoDataChange}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          required
        />  
        <br></br><br></br>        
        <FormLabel component="legend" required>Residente</FormLabel>
        <FormControlLabel
          control={<Checkbox 
          name="residenteSi"        
          checked={desaparecidoData.residenteSi} 
          onChange={ResidenteSiChange} />}
          label="Si"
        />
        <FormControlLabel style={{ marginRight: '30px' }}
          control={<Checkbox 
          name="residenteNo" 
          checked={desaparecidoData.residenteNo} 
          onChange={ResidenteNoChange} />}
          label="No"
        />
        <TextField style={{ marginRight: '30px', width: '300px' }}
          id="standard-textarea"
          label="Vestimenta"
          multiline
          size="small"
          name="vestimenta"
          value={desaparecidoData.vestimenta}
          onChange={DesaparecidoDataChange}
          required
        /> 
        <TextField style={{ marginRight: '30px', width: '280px' }}
          id="standard-textarea"
          label="Descripción General"          
          multiline
          size="small"
          name="descripcion"
          value={desaparecidoData.descripcion}
          onChange={DesaparecidoDataChange}
          required
        />           
        {/* datos familias */}
        <h1 id='datosfamiliares'>Datos Generales De Los Familiares</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '62%', height: '5px' }}
          /><p style={{color:'red', right:'500px'}}>(*) Campos obligatorios</p>
        </div><br></br>
        <TextField style={{ marginRight: '30px' }}
          label="Nombre(s)"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='nombre'
          value={familiarData.nombre}
          onChange={FamiliarDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Paterno"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='app'
          value={familiarData.app}
          onChange={FamiliarDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Materno"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='apm'
          value={familiarData.apm}
          onChange={FamiliarDataChange}
          required
        />
        <TextField style={{ marginRight: '30px', width: '200px' }}
          label="Parentesco"
          id="outlined-size-small"         
          variant="outlined"
          size="small"
          name='parentesco'
          value={familiarData.parentesco}
          onChange={FamiliarDataChange}
          required
        /><br></br><br></br>
        <FormLabel component="legend">Teléfonos</FormLabel><br></br>
        <TextField style={{ marginRight: '30px' }}
          label="Opción 1"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='telefonoUno'
          value={familiarData.telefonoUno}
          onChange={FamiliarDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Opción 2"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='telefonoDos'
          value={familiarData.telefonoDos}
          onChange={FamiliarDataChange}
        />        
        <TextField style={{ marginRight: '30px', width: '450px' }}
          label="Correo Electrónico"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='correo'
          value={familiarData.correo}
          onChange={FamiliarDataChange}
          required
        /><br></br><br></br>
        <FormLabel component="legend">Domicilio</FormLabel><br></br>
        <TextField style={{ marginRight: '30px', width: '150px' }}
          label="Código Postal"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='codigopostal'
          value={domicilioData.codigopostal}
          onChange={DomicilioDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Colonia"
          id="outlined-size-small"         
          variant="outlined"
          size="small"
          name='colonia'
          value={domicilioData.colonia}
          onChange={DomicilioDataChange}
          required
        />
        <TextField style={{ marginRight: '30px' }}
          label="Calle"
          id="outlined-size-small"         
          variant="outlined"
          size="small"
          name='calle'
          value={domicilioData.calle}
          onChange={DomicilioDataChange}
          required
        />
        <TextField style={{ marginRight: '30px', width: '140px' }}
          label="Núm. Exterior"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='noexterior'
          value={domicilioData.noexterior}
          onChange={DomicilioDataChange}
          required
        />
        <TextField style={{ marginRight: '30px', width: '130px' }}
          label="Núm. Interior"
          id="outlined-size-small"         
          variant="outlined"
          size="small"
          name='nointerior'
          value={domicilioData.nointerior}
          onChange={DomicilioDataChange}
          required
        />
       <br/><br/>

        <h1 id='datosapariencia'> Datos De Apariencia</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '37%', height: '5px' }}
          /><p style={{color:'red'}}>(*) Campos obligatorios</p>
        </div><br/>
        <FormLabel component="legend" required>Media Filación</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mediaFilacionData.complexion}
          onChange={mediaFilacionDataChange}          
          size="small"
          name='complexion'
          
        >
          <MenuItem value="Complexion" disabled>
            <em >Complexión</em>
          </MenuItem>
          <MenuItem value="Delgada">Delgada</MenuItem>
          <MenuItem value="Regular">Regular</MenuItem>
          <MenuItem value="Robusta">Robusta</MenuItem>
          <MenuItem value="Atlética">Atlética</MenuItem>
          <MenuItem value="Obesa">Obesa</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '165px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mediaFilacionData.colorPiel}
          onChange={mediaFilacionDataChange}          
          size="small"
          name='colorPiel'
        >
          <MenuItem value="ColorPiel" disabled>
            <em>Color de Piel</em>
          </MenuItem>
          <MenuItem value="Albino">Albino</MenuItem>
          <MenuItem value="Blanco">Blanco</MenuItem>
          <MenuItem value="Amarillo">Amarillo</MenuItem>
          <MenuItem value="Moreno Claro">Moreno Claro</MenuItem>
          <MenuItem value="Moreno">Moreno</MenuItem>
          <MenuItem value="Moreno Oscuro">Moreno Oscuro</MenuItem>
          <MenuItem value="Negro">Negro</MenuItem>
          <MenuItem value="Otro">Otro</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mediaFilacionData.cara}
          onChange={mediaFilacionDataChange}          
          size="small"
          name='cara'
        >
          <MenuItem value="Cara" disabled>
            <em>Cara</em>
          </MenuItem>
          <MenuItem value="Alargada">Alargada</MenuItem>
          <MenuItem value="Cuadrada">Cuadrada</MenuItem>
          <MenuItem value="Ovalada">Ovalada</MenuItem>
          <MenuItem value="Redonda">Redonda</MenuItem>          
        </Select>
        <br></br><br></br>
        <FormLabel component="legend" required>Cabello</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cabelloData.cantidad}
          onChange={cabelloDataChange}          
          size="small"
          name='cantidad'
        >
          <MenuItem value="Cantidad" disabled>
            <em>Cantidad</em>
          </MenuItem>
          <MenuItem value="Abundante">Abundante</MenuItem>
          <MenuItem value="Escaso">Escaso</MenuItem>
          <MenuItem value="Regular">Regular</MenuItem>
          <MenuItem value="Sin Cabello">Sin Cabello</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '170px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cabelloData.color}
          onChange={cabelloDataChange}          
          size="small"
          name='color'
        >
          <MenuItem value="Color" disabled>
            <em>Color</em>
          </MenuItem>
          <MenuItem value="Abundante">Albino</MenuItem>
          <MenuItem value="Negro">Negro</MenuItem>
          <MenuItem value="Rubio">Rubio</MenuItem>
          <MenuItem value="Entrecano">Entrecano</MenuItem>
          <MenuItem value="Castaño Oscuro">Castaño Oscuro</MenuItem>
          <MenuItem value="Castaño Claro">Castaño Claro</MenuItem>
          <MenuItem value="Pelirrojo">Pelirrojo</MenuItem>
          <MenuItem value="Cano Total">Cano Total</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cabelloData.forma}
          onChange={cabelloDataChange}          
          size="small"
          name='forma'
        >
          <MenuItem value="Forma" disabled>
            <em>Forma</em>
          </MenuItem>
          <MenuItem value="Crespo">Crespo</MenuItem>
          <MenuItem value="Lacio">Lacio</MenuItem>
          <MenuItem value="Ondulado">Ondulado</MenuItem>
          <MenuItem value="Rizado">Rizado</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '180px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={cabelloData.calvicie}
          onChange={cabelloDataChange}          
          size="small"
          name='calvicie'
        >
          <MenuItem value="Calvicie" disabled>
            <em>Calvicie</em>
          </MenuItem>
          <MenuItem value="Frontal">Frontal</MenuItem>
          <MenuItem value="Tonsura">Tonsura</MenuItem>
          <MenuItem value="Frontón Parietal">Frontón Parietal</MenuItem>
          <MenuItem value="Rizado">Total</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '200px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={cabelloData.implantacion}
          onChange={cabelloDataChange}
          name='implantacion'
        >
          <MenuItem value="Implantacion" disabled>
            <em>Implantación</em>
          </MenuItem>
          <MenuItem value="Circular">Circular</MenuItem>
          <MenuItem value="Rectangular">Rectangular</MenuItem>
          <MenuItem value="Rectangular">Rectangular</MenuItem>
          <MenuItem value="En Punta Ondulado">En Punta Ondulado</MenuItem>
        </Select>
        <br></br><br></br>

        <FormLabel component="legend" required>Cejas</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '200px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={cejasData.direccion}
          onChange={cejasDataChange}
          name='direccion'
        >
          <MenuItem value="Direccion" disabled>
            <em>Dirección</em>
          </MenuItem>
          <MenuItem value="Internas">Internas</MenuItem>
          <MenuItem value="Externas">Externas</MenuItem>
          <MenuItem value="Horizontal">Horizontal</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '200px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={cejasData.implantacion}
          onChange={cejasDataChange}
          name='implantacion'
        >
          <MenuItem value="Implantacion" disabled>
            <em>Implantación</em>
          </MenuItem>
          <MenuItem value="Altas">Altas</MenuItem>
          <MenuItem value="Bajas">Bajas</MenuItem>
          <MenuItem value="Próximas">Próximas</MenuItem>
          <MenuItem value="Separadas">Separadas</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '210px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={cejasData.forma}
          onChange={cejasDataChange}
          name='forma'
        >
          <MenuItem value="Forma" disabled>
            <em>Forma</em>
          </MenuItem>
          <MenuItem value="Arqueadas">Arqueadas</MenuItem>
          <MenuItem value="Arqueadas Sinuosas">Arqueadas Sinuosas</MenuItem>
          <MenuItem value="Próximas">Próximas</MenuItem>
          <MenuItem value="Separadas">Separadas</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '210px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={cejasData.tamano}
          onChange={cejasDataChange}
          name='tamano'
        >
          <MenuItem value="Tamano" disabled>
            <em>Tamaño</em>
          </MenuItem>
          <MenuItem value="Gruesas">Gruesas</MenuItem>
          <MenuItem value="Delgadas">Delgadas</MenuItem>
          <MenuItem value="Cortas">Cortas</MenuItem>
          <MenuItem value="Largas">Largas</MenuItem>
        </Select>
        
        <br></br><br></br>

        <FormLabel component="legend" required>Ojos</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '180px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={ojosData.color}
          onChange={ojosDataChange}
          name='color'
        >
          <MenuItem value="Color" disabled>
            <em>Color</em>
          </MenuItem>
          <MenuItem value="Azul">Azul</MenuItem>
          <MenuItem value="Gris">Gris</MenuItem>
          <MenuItem value="Verde">Verde</MenuItem>
          <MenuItem value="Café Oscuro">Café Oscuro</MenuItem>
          <MenuItem value="Café Claro">Café Claro</MenuItem>
          <MenuItem value="Otro">Otro</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={ojosData.forma}
          onChange={ojosDataChange}
          name='forma'
        >
          <MenuItem value="Forma" disabled>
            <em>Forma</em>
          </MenuItem>
          <MenuItem value="Alargados">Alargados</MenuItem>
          <MenuItem value="Redondos">Redondos</MenuItem>
          <MenuItem value="Ovalados">Ovalados</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={ojosData.tamano}
          onChange={ojosDataChange}
          name='tamano'
        >
          <MenuItem value="Tamano" disabled>
            <em>Tamaño</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Regulares">Regulares</MenuItem>
          <MenuItem value="Pequeños">Pequeños</MenuItem>
        </Select>
        <br></br><br></br>

        <FormLabel component="legend" required>Nariz</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          value={narizData.raiz}
          onChange={narizDataChange}
          name='raiz'
        >
          <MenuItem value="Raiz" disabled>
            <em>Raiz</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Regulares">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue="Altura"
          size="small"
          name='dorso'
          value={narizData.dorso}
          onChange={narizDataChange}
        >
          <MenuItem value="Dorso" disabled>
            <em>Dorso</em>
          </MenuItem>
          <MenuItem value="Cóncavo">Cóncavo</MenuItem>
          <MenuItem value="Convexo">Convexo</MenuItem>
          <MenuItem value="Recto">Recto</MenuItem>
          <MenuItem value="Sinuoso">Sinuoso</MenuItem>

        </Select>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='ancho'
          value={narizData.ancho}
          onChange={narizDataChange}
        >
          <MenuItem value="Ancho" disabled>
            <em>Ancho</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"        
          size="small"
          name='base'
          value={narizData.base}
          onChange={narizDataChange}
        >
          <MenuItem value="Base" disabled>
            <em>Base</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '140px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"        
          size="small"
          name='altura'
          value={narizData.altura}
          onChange={narizDataChange}
        >
          <MenuItem value="Altura" disabled>
            <em>Altura</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>
        </Select>
        <br></br><br></br>
            {/* datos boca */}
        <FormLabel component="legend" required>Boca</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '120px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"          
          size="small"
          name='tamano'
          value={bocaData.tamano}
          onChange={bocaDataChange}
        >
          <MenuItem value="Tamano" disabled>
            <em>Tamaño</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"          
          size="small"
          name='comisuras'
          value={bocaData.comisuras}
          onChange={bocaDataChange}
        >
          <MenuItem value="Comisuras" disabled>
            <em>Comisuras</em>
          </MenuItem>
          <MenuItem value="Grande">Abatidas</MenuItem>
          <MenuItem value="Elevadas">Elevadas</MenuItem>
          <MenuItem value="Simétricas">Simétricas</MenuItem>
          <MenuItem value="Asimétricas">Asimétricas</MenuItem>

        </Select>
            {/* datos de la frente */}
        <div className='frente' style={{ marginTop: '-42px', marginRight:'320px' }}>
          <div>
            <FormLabel component="legend" required>Frente</FormLabel><br></br>
            <Select style={{ marginRight: '30px', width: '150px' }}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"          
            size="small"
            name='altura'
            value={frenteData.altura}
            onChange={frenteDataChange}
          >
            <MenuItem value="Altura" disabled>
              <em>Altura</em>
            </MenuItem>
            <MenuItem value="Grande">Grande</MenuItem>
            <MenuItem value="Mediana">Mediana</MenuItem>
            <MenuItem value="Pequeña">Pequeña</MenuItem>
          </Select>
          <Select style={{ marginRight: '30px', width: '150px' }}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"          
            size="small"
            name='inclinacion'
            value={frenteData.inclinacion}
            onChange={frenteDataChange}
          >
            <MenuItem value="Inclinacion" disabled>
              <em>Inclinación</em>
            </MenuItem>
            <MenuItem value="Oblicua">Oblicua</MenuItem>
            <MenuItem value="Intermedia">Intermedia</MenuItem>
            <MenuItem value="Pequeña">Vertical</MenuItem>
            <MenuItem value="Prominente">Prominente</MenuItem>
          </Select>
          <Select style={{ marginRight: '30px', width: '150px' }}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"          
            size="small"
            name='ancho'
            value={frenteData.ancho}
            onChange={frenteDataChange}
          >
            <MenuItem value="Ancho" disabled>
              <em>Ancho</em>
            </MenuItem>
            <MenuItem value="Grande">Grande</MenuItem>
            <MenuItem value="Mediana">Mediana</MenuItem>
            <MenuItem value="Pequeña">Pequeña</MenuItem>
          </Select>

          </div>
        </div>
        <br></br><br></br>
         {/* datos de los labios */}
        <FormLabel component="legend" required>Labios</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '160px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"          
          size="small"
          name='espesor'
          value={labiosData.espesor }
          onChange={labiosDataChange}
        >
          <MenuItem value="Espesor" disabled>
            <em>Espesor</em>
          </MenuItem>
          <MenuItem value="Delgados">Delgados</MenuItem>
          <MenuItem value="Medianos">Medianos</MenuItem>
          <MenuItem value="Gruesos">Gruesos</MenuItem>
          <MenuItem value="Morrudos">Morrudos</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '200px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"          
          size="small"
          name='alturaNasoLabial'
          value={labiosData.alturaNasoLabial}
          onChange={labiosDataChange}
        >
          <MenuItem value="Altura Naso Labial" disabled>
            <em>Altura Naso Labial</em>
          </MenuItem>          
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '200px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue="Prominencia"
          size="small"
          name='prominencia'
          value={labiosData.prominencia}
          onChange={labiosDataChange}
        >
          <MenuItem value="Prominencia" disabled>
            <em>Prominencia</em>
          </MenuItem>
          <MenuItem value="Labio Inferiores">Labio Inferiores</MenuItem>
          <MenuItem value="Labio Superiores">Labio Superiores</MenuItem>          
          <MenuItem value="Ninguno">Ninguno</MenuItem>
        </Select>
        <br></br><br></br>
            {/* datos de menton */}
        <FormLabel component="legend" required>Mentón</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='tipos'
          value={mentonData.tipos}
          onChange={mentonDataChange}
        >
          <MenuItem value="Tipo" disabled>
            <em>Tipo</em>
          </MenuItem>
          <MenuItem value="Bilovano">Bilovano</MenuItem>
          <MenuItem value="Foseta">Foseta</MenuItem>
          <MenuItem value="Borla">Borla</MenuItem>
          <MenuItem value="Ninguno">Ninguno</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='forma'
          value={mentonData.forma}
          onChange={mentonDataChange}
        >
          <MenuItem value="Forma" disabled>
            <em>Forma</em>
          </MenuItem>
          <MenuItem value="Oval">Oval</MenuItem>
          <MenuItem value="Cuadrado">Cuadrado</MenuItem>
          <MenuItem value="En Punta">En Punta</MenuItem>
        </Select>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='inclinacion'
          value={mentonData.inclinacion}
          onChange={mentonDataChange}
        >
          <MenuItem value="Inclinacion" disabled>
            <em>Inclinación</em>
          </MenuItem>
          <MenuItem value="Huyente">Huyente</MenuItem>
          <MenuItem value="Prominente">Prominente</MenuItem>
          <MenuItem value="Vertical">Vertical</MenuItem>
        </Select>
        <br></br><br></br>
            {/* datos de orejas */}
          <FormLabel component="legend" required>Orejas</FormLabel><br></br> 
          <Select style={{ marginRight: '30px', width: '150px' }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
              name='forma'
              value={orejasData.forma}
              onChange={orejasoDataChange}  
            >
              <MenuItem value="Forma" disabled>
                <em>Forma</em>
              </MenuItem>
              <MenuItem value="Grande">Grande</MenuItem>
              <MenuItem value="Mediana">Mediana</MenuItem>
              <MenuItem value="Pequeña">Pequeña</MenuItem>
              <MenuItem value="Triangulo">Triangulo</MenuItem>
            </Select>

             {/* datos de herix */}
            <div className='frente' style={{ marginTop: '-42px', marginRight:'470px' }}>
          <div >
               
        <FormLabel component="legend" required>Hélix</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '160px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='superior'
          value={herixData.superior}
          onChange={herixDataChange}
        >
          <MenuItem value="Superior" disabled>
            <em>Superior</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem>  
        </Select>        
        <Select style={{ marginRight: '30px', width: '160px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='posterior'
          value={herixData.posterior}
          onChange={herixDataChange}
        >
          <MenuItem value="Posterior" disabled>
            <em>Posterior</em>
          </MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
          <MenuItem value="Mediana">Mediana</MenuItem>
          <MenuItem value="Pequeña">Pequeña</MenuItem> 
        </Select>
        <Select style={{ marginRight: '30px', width: '160px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size="small"
          name='adherencia'
          value={herixData.adherencia}
          onChange={herixDataChange}
        >
          <MenuItem value="Adherencia" disabled>
            <em>Adherencia</em>
          </MenuItem>
          <MenuItem value="Unido">Unido</MenuItem>
          <MenuItem value="Separado">Separado</MenuItem>
          <MenuItem value="Muy Separado">Muy Separado</MenuItem>
        </Select>
          </div> 
            </div> 
        
        <br></br><br></br>
        {/* datos de lobulo */}        

        <FormLabel component="legend" required>Lobuló</FormLabel><br></br>
            <Select style={{ marginRight: '30px', width: '170px' }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
              name='contorno'
              value={lobuloData.contorno}
              onChange={lobuloDataChange}  
            >
              <MenuItem value="Contorno" disabled>
                <em>Contorno</em>
              </MenuItem>
              <MenuItem value="Descendiente">Descendiente</MenuItem>
              <MenuItem value="En Escuadra">En Escuadra</MenuItem>
              <MenuItem value="En Golfo">En Golfo</MenuItem>
              <MenuItem value="Intermedio">Intermedio</MenuItem>
            </Select>        
            <Select style={{ marginRight: '30px', width: '180px' }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
              name='adherencia'
              value={lobuloData.adherencia}
              onChange={lobuloDataChange}  
            >
              <MenuItem value="Adherencia" disabled>
                <em>Adherencia</em>
              </MenuItem>
              <MenuItem value="Unido">Unido</MenuItem>
              <MenuItem value="Separado">Separado</MenuItem>
              <MenuItem value="Muy Separado">Muy Separado</MenuItem>
            </Select>
            <Select style={{ marginRight: '30px', width: '170px' }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
              name='particularidad'
              value={lobuloData.particularidad}
              onChange={lobuloDataChange}
            >
              <MenuItem value="Particularidad" disabled>
                <em>Particularidad</em>
              </MenuItem>
              <MenuItem value="Perforado">Perforado</MenuItem>
              <MenuItem value="Foseta">Foseta</MenuItem>
              <MenuItem value="Islote">Islote</MenuItem>                          
            </Select>
            <Select style={{ marginRight: '30px', width: '150px' }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
              name='dimension'
              value={lobuloData.dimension}
              onChange={lobuloDataChange}
            >
              <MenuItem value="Dimension" disabled>
                <em>Dimensión</em>
              </MenuItem>
              <MenuItem value="Grande">Grande</MenuItem>
              <MenuItem value="Mediana">Mediana</MenuItem>
              <MenuItem value="Pequeña">Pequeña</MenuItem>           
            </Select>
            
        <br></br><br></br>


        

        {/* senas particulares */}
        <h1 id='señasparticulares'>Señales Particulares</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '430px', height: '5px' }}
          />
        </div><br />
        <Grid container spacing={2}>
          <Grid item style={{ width: '550px'}}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="Cicatrices"
                  checked={sparticularesData.some((sp) => sp.tipo === 'Cicatrices')}
                  onChange={spCheckboxChange}
                  disabled={
                    sparticularesData.some(
                      (sp) => sp.tipo === 'Cicatrices' && sp.descripcion !== ''
                    )
                  }
                />
              }
              label="Cicatrices"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Cicatrices') && (
              <TextField
                style={{ width: '340px' }}
                label="Descripción"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Cicatrices"
                value={sparticularesData.find((sp) => sp.tipo === 'Cicatrices')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Cicatrices')}
                
              />
            )}
            <div className='div-foto'>
              {sparticularesData.some((sp) => sp.tipo === 'Cicatrices') && (
                <div>
                  <input
                    type="file"
                    id="file-upload2"
                    className="file-input"
                    accept="image/*"
                    //onChange={handleImageChange}
                  />
                  <label htmlFor="file-upload2">
                    <Button variant="contained" color="primary" component="span" style={{fontSize:'25px', marginTop:'0px'}}>
                      <PiCameraPlusBold/>             
                    </Button>              
                  </label>
                </div>
              )}
          </div>
          </Grid>
          <Grid item>
            <FormControlLabel 
              control={
                <Checkbox
                  color="primary"
                  name="Lunares"
                  checked={sparticularesData.some((sp) => sp.tipo === 'Lunares')}
                  onChange={spCheckboxChange}
                  disabled={
                    sparticularesData.some(
                      (sp) => sp.tipo === 'Lunares' && sp.descripcion !== ''
                    )
                  }
                />
              }
              label="Lunares"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Lunares') && (
              <TextField
                style={{ width: '400px' }}
                label="Descripción"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Lunares"
                value={sparticularesData.find((sp) => sp.tipo === 'Lunares')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Lunares')}
                
              />
            )}
            <div className='div-foto'>
              {sparticularesData.some((sp) => sp.tipo === 'Lunares') && (
                <div>
                  
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" style={{fontSize:'25px', marginTop:'0px'}}>
                      <PiCameraPlusBold/>             
                    </Button>              
                  </label>
                </div>
              )}
          </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item style={{ width: '550px'}}>
            <FormControlLabel style={{marginLeft:'26px'}}
              control={
                <Checkbox
                  color="primary"
                  name="Tatuajes"
                  checked={sparticularesData.some((sp) => sp.tipo === 'Tatuajes')}
                  onChange={spCheckboxChange}
                  disabled={
                    sparticularesData.some(
                      (sp) => sp.tipo === 'Tatuajes' && sp.descripcion !== ''
                    )
                  }
                />
              }
              label="Tatuajes"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Tatuajes') && (
              <TextField
                style={{ width: '340px' }}
                label="Descripción"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Tatuajes"
                value={sparticularesData.find((sp) => sp.tipo === 'Tatuajes')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Tatuajes')}
                
              />
            )}
            <div className='div-foto'>
              {sparticularesData.some((sp) => sp.tipo === 'Tatuajes') && (
                <div>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" style={{fontSize:'25px', marginTop:'0px'}}>
                      <PiCameraPlusBold/>             
                    </Button>              
                  </label>
                </div>
              )}
          </div>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="Protesis"
                  checked={sparticularesData.some((sp) => sp.tipo === 'Protesis')}
                  onChange={spCheckboxChange}
                  disabled={
                    sparticularesData.some(
                      (sp) => sp.tipo === 'Protesis' && sp.descripcion !== ''
                    )
                  }
                />
              }
              label="Protesis"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Protesis') && (
              <TextField
                style={{ width: '400px' }}
                label="Descripción"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Protesis"
                value={sparticularesData.find((sp) => sp.tipo === 'Protesis')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Protesis')}
                
              />
            )}
            <div className='div-foto'>
              {sparticularesData.some((sp) => sp.tipo === 'Protesis') && (
                <div>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" style={{fontSize:'25px', marginTop:'0px'}}>
                      <PiCameraPlusBold/>             
                    </Button>              
                  </label>
                </div>
              )}
          </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item style={{ width: '550px'}}>
            <FormControlLabel style={{marginLeft:'21px'}}
              control={
                <Checkbox
                  color="primary"
                  name="Defectos"
                  checked={sparticularesData.some((sp) => sp.tipo === 'Defectos')}
                  onChange={spCheckboxChange}
                  disabled={
                    sparticularesData.some(
                      (sp) => sp.tipo === 'Defectos' && sp.descripcion !== ''
                    )
                  }
                />
              }
              label="Defectos"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Defectos') && (
              <TextField
                style={{ width: '340px' }}
                label="Descripción"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Defectos"
                value={sparticularesData.find((sp) => sp.tipo === 'Defectos')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Defectos')}
                
              />
            )}
            <div className='div-foto'>
              {sparticularesData.some((sp) => sp.tipo === 'Defectos') && (
                <div>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" style={{fontSize:'25px', marginTop:'0px'}}>
                      <PiCameraPlusBold/>             
                    </Button>              
                  </label>
                </div>
              )}
          </div>
          </Grid>
          <Grid item>
            <FormControlLabel style={{marginLeft:'33px'}}
              control={
                <Checkbox
                  color="primary"
                  name="Otros"
                  checked={sparticularesData.some((sp) => sp.tipo === 'Otros')}
                  onChange={spCheckboxChange}
                  disabled={
                    sparticularesData.some(
                      (sp) => sp.tipo === 'Otros' && sp.descripcion !== ''
                    )
                  }
                />
              }
              label="Otros"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Otros') && (
              <TextField
                style={{ width: '400px' }}
                label="Descripción"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Otros"
                value={sparticularesData.find((sp) => sp.tipo === 'Otros')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Otros')}
                
              />
            )}
            <div className='div-foto'>
              {sparticularesData.some((sp) => sp.tipo === 'Otros') && (
                <div>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" style={{fontSize:'25px', marginTop:'0px'}}>
                      <PiCameraPlusBold/>             
                    </Button>              
                  </label>
                </div>
              )}
          </div>
          </Grid>
        </Grid>       
              

        
        
      </form><br></br><br></br>

     

    </div>
    </div>

  );
}

export default Principal;
