import './Css/actualizar.css';
import './Footer.js';
import linea_colores from './img/linea_colores.png';
import { TextField, FormControlLabel, Checkbox, FormLabel, Select, MenuItem, Button, Grid, Modal, Paper } from '@mui/material';
import { SlNote } from 'react-icons/sl';
import { useNavigate, useParams } from 'react-router-dom'
import {React , useState, useEffect} from 'react';
import axios from 'axios';
// import Swal from 'sweetalert2';
import Swal from 'sweetalert2';
//son para mostrar informacion en los inputs y actualizar 
const URIdesaparecido = `http://${process.env.REACT_APP_HOSTAPI}/desaparecido/`
const URIfamiliar = `http://${process.env.REACT_APP_HOSTAPI}/familiar/`
const URIdomicilio = `http://${process.env.REACT_APP_HOSTAPI}/domicilio/`
const URImfilacion = `http://${process.env.REACT_APP_HOSTAPI}/mfilacion/`
const URIcabello = `http://${process.env.REACT_APP_HOSTAPI}/cabello/`
const URIcejas = `http://${process.env.REACT_APP_HOSTAPI}/cejas/`
const URIojos = `http://${process.env.REACT_APP_HOSTAPI}/ojos/`
const URInariz = `http://${process.env.REACT_APP_HOSTAPI}/nariz/`
const URIboca =  `http://${process.env.REACT_APP_HOSTAPI}/boca/`
const URIfrente = `http://${process.env.REACT_APP_HOSTAPI}/frente/`
const URIlabios = `http://${process.env.REACT_APP_HOSTAPI}/labios/`
const URImenton = `http://${process.env.REACT_APP_HOSTAPI}/menton/`
const URIlobulo = `http://${process.env.REACT_APP_HOSTAPI}/lobulo/`
const URIherix = `http://${process.env.REACT_APP_HOSTAPI}/herix/`
const URIsenasParticulares = `http://${process.env.REACT_APP_HOSTAPI}/sparticulares/`
const URIencontrado = `http://${process.env.REACT_APP_HOSTAPI}/encontrado/`
const URIorejas = `http://${process.env.REACT_APP_HOSTAPI}/orejas/`
const URInota = `http://${process.env.REACT_APP_HOSTAPI}/notas/`


function Actualizar() {
      const navigate = useNavigate() 
      const {id,userId} = useParams()      
      const [modalNotasOpen, setModalNotasOpen] = useState(false);      
      const [nota, setNota] = useState([]);

      // Modales de Notas
      const handleOpenModalNotas = () => {
        setModalNotasOpen(true);
      };      
      
      
      const handleCloseModalNotas = () => {
        setModalNotasOpen(false);
      };
      
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
        const { name, value, type, checked } = event.target;
      
        if (type === 'checkbox') {
          setDesaparecidoData((prevData) => ({
            ...prevData,
            [name]: checked,
            sexo: name === 'sexoMasculino' ? 'Masculino' : 'Femenino',
            residente: name === 'residenteSi' ? 'Si Recurrente' : 'No Recurrente',
          }));
        } else {
          setDesaparecidoData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      }; 
      //familiar 
      const [familiarData, setFamiliarData] = useState({              
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
      //nota
      const [notaData, setNotaData] = useState({
        descripcion:'',
        fecha:'',
      })
      const notasDataChange = (event) => {
        const {name, value} = event.target;
        setNotaData((prevData)=>({
          ...prevData,
          [name] : value,
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
      //orejas
      const [orejasData, setOrejasData] = useState({
        forma:'Forma',
      })
      const OrejasDataChange = (event)=>{
        const {name, value} = event.target;
        setOrejasData((prevData)=>({
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
      //encontrado//
      const [encontradoData, setEncontradoData] = useState({
        estado:'',
        colonia:'',
        fecha:'',
        descripcion:'',
        latitud:'',
        longitud:'',
        calle:'',
      })
      const encontradoDataChange = (event)=>{
        const {name, value} = event.target;
        setEncontradoData((prevData)=>({
          ...prevData,
          [name]: value,
        }))              
      }

      //procedimiento para actualizar
      const update = async (e) => {
        e.preventDefault();
      
        // Mostrar el diálogo de Swal para confirmar la actualización
        Swal.fire({
          title: '¿Quieres guardar los cambios?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Guardar',
          denyButtonText: `No`,
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              // Realizar las llamadas axios.put para actualizar los datos
              await axios.put(URIdesaparecido + id, desaparecidoData);
              await axios.put(URIfamiliar +id, familiarData)
              await axios.put(URIdomicilio + id, domicilioData)
              await axios.put(URImfilacion + id, mediaFilacionData)
              await axios.put(URIcabello + id, cabelloData)
              await axios.put(URIcejas + id , cejasData)
              await axios.put(URIojos + id, ojosData)
              await axios.put(URInariz + id, narizData)
              await axios.put(URIboca + id , bocaData)
              await axios.put(URIfrente + id, frenteData)
              await axios.put(URIlabios + id, labiosData)
              await axios.put(URImenton + id, mentonData)
              await axios.put(URIlobulo + id, lobuloData)
              await axios.put(URIherix + id, herixData)
              await axios.put(URIsenasParticulares + id, sparticularesData)
              await axios.put(URIencontrado + id, encontradoData)
              await axios.put(URIorejas + id, orejasData)

              // Mostrar alerta de éxito con SweetAlert2

                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: 'La información se ha actualizado correctamente',
                  showConfirmButton: false,
                  timer: 1300
                })

              navigate(`/tabla/${userId}`);
            } catch (error) {
              // Manejar el error si ocurre alguna excepción en las llamadas axios.put
              
              Swal.fire('Error', 'Ha ocurrido un error al actualizar los datos', 'error');
            }
          } else if (result.isDenied) {
            Swal.fire('Los cambios no se guardaron', '', 'info');
          }
        });
      };
      



      /*usamos el estado de la informacionde la base de datos */
      useEffect(() => {
        const getDesaparecidoById = async () => {
          try {
            const res = await axios.get(URIdesaparecido + id)
            setDesaparecidoData(res.data); 
            console.log(res.data);

            // Transforma la URL de la imagen aquí antes de establecer el estado
            const transformedData = {
              ...res.data,
              urlFoto: `http://${process.env.REACT_APP_HOSTAPI}/${res.data.urlFoto.replace(/\\/g, '/')}`,
            };
            setDesaparecidoData(transformedData);
            

            const resFamiliar = await axios.get(URIfamiliar + id);            
            setFamiliarData(resFamiliar.data[0]);
            

           const idfam = resFamiliar.data[0].idfamiliar
                      
            const resDomicilio = await axios.get(URIdomicilio + idfam);
            setDomicilioData(resDomicilio.data)
            
            const resMfilacion = await axios.get(URImfilacion + id);
            setMediaFilacionData(resMfilacion.data[0])

            const resCabello = await axios.get(URIcabello + id)
            setCabelloData(resCabello.data[0])

            const resCejas = await axios.get(URIcejas + id)
            setCejasData(resCejas.data[0])

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

            const resMenton = await axios.get(URImenton + id)
            setMentonData(resMenton.data[0])

            const resLobulo = await axios.get(URIlobulo + id)
            setLobuloData(resLobulo.data[0])

            const resHerix = await axios.get(URIherix + id)
            setHerixData(resHerix.data[0])

            const resOrejas = await axios.get(URIorejas + id)
            setOrejasData(resOrejas.data[0])

            const resSParticulares = await axios.get(URIsenasParticulares + id)
            setSParticularesData(resSParticulares.data)

            const resNota = await axios.get(URInota + id)
            setNota(resNota.data)

            const resEncontrado = await axios.get(URIencontrado + id)
            setEncontradoData(resEncontrado.data[0])
                        

                       
            
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };      
        getDesaparecidoById();     
      }, [id]);


        //guardar notas
        const storeNotas = async (e) =>{
          e.preventDefault();

          
          try {
                        
            const notas = {
              desaparecido_iddesaparecido: id,
              descripcion: notaData.descripcion,
              
            }
            
             await axios.post(URInota, notas)
            
              // Obtener la fecha actual
              const fechaActual = new Date().toISOString();

              // Crear el nuevo objeto de nota con la fecha de creación
              const nuevaNota = {
                ...notaData,
                createdAt: fechaActual,
              };

              // Reiniciar el campo de descripción
              setNotaData((prevData) => ({
                ...prevData,
                descripcion: '', // Reiniciar el campo después de almacenar
              }));

              // Actualizar la lista de notas
              const updatedNotaList = [...nota, nuevaNota]; // Agregar la nueva nota a la lista
              setNota(updatedNotaList); // Actualizar el estado con la lista actualizada de notas
            
          } catch (error) {
            console.error('Error al guardar notas:', error);
          }
        }

  // Funciones para cambiar el estado de los checkboxes de Sexo
  const SexoMasculinoChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      sexoMasculino: event.target.checked,
      sexoFemenino: false,
      sexo: event.target.checked ? 'Masculino' : '',
    }));
  };
  const SexoFemeninoChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      sexoFemenino: event.target.checked,
      sexoMasculino: false,
      sexo: event.target.checked ? 'Femenino' : '',
    }));
  };
  // Funciones para cambiar el estado de los checkboxes de Residente
  const ResidenteSiChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      residenteSi: event.target.checked,
      residenteNo: false,
      residente: event.target.checked ? 'Si Recurrente' : '',
    }));
  };
  const ResidenteNoChange = (event) => {
    setDesaparecidoData((prevData) => ({
      ...prevData,
      residenteNo: event.target.checked,
      residenteSi: false,
      residente: event.target.checked ? 'No Recurrente' : '',
    }));
  };
  
  const NavigateToTabla = () => {
    navigate(`/tabla/${userId}`);
  };

  const NavigateFicha = () => {
    navigate(`/fichasimple/${id}/${userId}`)
  }

  function formatFecha(isoFecha) {
    const fecha = new Date(isoFecha);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString(undefined, opciones);
  }
 

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleOpenModalNotas} variant="contained" color="secondary" style={{ marginRight: '20px', marginTop: '10px',background: 'rgba(253, 73, 92, 0.75)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}>
         <SlNote/>
          Notas
          <Modal
              open={modalNotasOpen}
              onClose={handleCloseModalNotas}
              className="modal-custom"
            >
              <Paper className="paper-custom">
                <div className="centra-titulo">
                  <h2 className="tit-carpet">
                    <SlNote className="not" />
                    Notas
                  </h2>
                  <button onClick={(e) => { e.stopPropagation(); handleCloseModalNotas(); }} className="close-button">
                    X
                  </button>
                  <img className="img-barrrita" src={linea_colores} alt="Barra" />
                </div>
                <div className="conta-not">
                <Button variant="contained" onClick={storeNotas} style={{left:'30%'}}>
                        Agregar
                </Button><br/>                                   
                  <div className="container-notas">
                    <form className="form-s">                    
                          <TextField style={{  width: '100%' }}
                            id="standard-textarea"
                            label="Agregar nota"
                            multiline
                            name='descripcion'
                            value={notaData.descripcion || ''}
                            onChange={notasDataChange}
                          />                      
                            <div className="contenedor-notas-guardadas">
                              <h3>Notas Guardadas:</h3>
                              <ul>
                                {nota.map((nota, index) => (
                                  <li key={index}>
                                     Fecha de creación: {formatFecha(nota.createdAt)}, Descripción: {nota.descripcion}

                                  </li>
                                ))}
                              </ul>
                            </div>                 
                    </form>                    
                  </div>
                </div>
              </Paper>
            </Modal>
        </Button>
        
        <Button variant="contained" color="secondary" onClick={NavigateFicha} style={{ marginRight: '20px', marginTop: '10px',background: 'rgba(253, 73, 92, 0.75)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}>
          Ficha
        </Button>
        <Button variant="contained" color="secondary" href="/carpetad" style={{ marginRight: '20px', marginTop: '10px',background: 'rgba(112, 212, 75, 1)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}>
          Carpeta De Investigacion
        </Button>
        <Button variant="contained" onClick={update} color="secondary" href="#" style={{ marginRight: '20px', marginTop: '10px' ,background: 'rgba(74, 193, 224, 1)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)'}}>
          Guardar cambios
        </Button>
        <Button variant="contained" color="secondary" onClick={NavigateToTabla} style={{ marginRight: '20px', marginTop: '10px',background: 'rgba(241, 138, 0, 1)' , boxshadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)'}}>
          Regresar
        </Button>
      </div>    
    <div className="container">
      <h1 id='datosgenerales'>Datos Generales</h1><br/><br/>
      <div className="image-container">
        <img
          src={linea_colores}
          alt="Barra de colores"
          style={{ width: '350px', height: '5px' }}
        />
      </div><br/>
      <form>
        <TextField style={{ marginRight: '30px' }}
         label="Nombre(s)"
         id="outlined-size-small"
         variant="outlined"
         name='nombre'
         size="small"
         onChange={DesaparecidoDataChange}
         value={desaparecidoData.nombre || ''}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Paterno"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="app"
          onChange={DesaparecidoDataChange}
          value={desaparecidoData.app || ''}          
        />
        <TextField style={{ marginRight: '100px' }}
          label="Apellido Materno"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="apm"
          value={desaparecidoData.apm || ''}
          onChange={DesaparecidoDataChange}
        />
        <TextField style={{ marginRight: '10px', width: '107px' }}
          label="No. reporte"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="noReporte"
          value={desaparecidoData.noReporte || ''}
          onChange={DesaparecidoDataChange}
          disabled
        /><br/><br/>
        <FormLabel component="legend">Sexo</FormLabel>
        <FormControlLabel
          control={<Checkbox
            id="sexoMasculinoCheckbox" 
            name="sexo" 
            checked={desaparecidoData.sexo === 'Masculino' ? true : false}
            onChange={SexoMasculinoChange}/>}
          label="Maculino"
        />
        <FormControlLabel style={{ marginRight: '30px' }}
          control={<Checkbox 
            id="sexoFemeninoCheckbox"
            name="sexo"
            checked={desaparecidoData.sexo === 'Femenino' ? true : false}
            onChange={SexoFemeninoChange}/>}
          label="Femenino"
        />
        <TextField style={{ marginRight: '30px', width: '200px' }}
          id="date"
          label="Fecha De Nacimiento"
          type="date" 
          name="fechaNacimiento"
          value={desaparecidoData.fechaNacimiento || ''}
          onChange={DesaparecidoDataChange}         
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <TextField style={{ marginRight: '30px', width: '70px' }}
          label="Edad"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="edad"
          value={desaparecidoData.edad || ''}
          onChange={DesaparecidoDataChange}
        />
        <TextField style={{ marginRight: '60px', width: '100px' }}
          label="Estatura(cm)"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="estatura"
          value={desaparecidoData.estatura || ''}
          onChange={DesaparecidoDataChange}
        />
        <TextField style={{ marginRight: '60px', width: '100px' }}
          label="Peso"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="estatura"
          value={desaparecidoData.peso || ''}
          onChange={DesaparecidoDataChange}
        />
        <TextField style={{ marginRight: '30px', width: '200px' }}
          id="date"
          label="Fecha De Solicitud"
          type="date"
          name="fechaSolicitud"
          value={desaparecidoData.fechaSolicitud || ''}
          onChange={DesaparecidoDataChange}       
          disabled     
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        /><br></br><br></br>
        <FormLabel component="legend">Lugar de los Hechos</FormLabel><br></br>
        <TextField style={{ marginRight: '30px' }}
          label="Colonia"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name="colonia"
          value={desaparecidoData.colonia || ''}
          onChange={DesaparecidoDataChange}
        />
        <TextField style={{ marginRight: '30px', width: '200px' }}
          id="date"
          label="Fecha De Desaparecido"
          type="date"
          name='fechaDesaparecido'
          value={desaparecidoData.fechaDesaparecido || ''}
          onChange={DesaparecidoDataChange}   
          disabled      
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <TextField style={{ marginRight: '30px' }}
          label="¿A que se dedica?"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='dedicacion'
          value={desaparecidoData.dedicacion || ''}
          onChange={DesaparecidoDataChange}
        />
         {/*imagen del desaparecido para mostrar */}
          <div className="upload-boxxxxx">
            <input type="file" id="file-upload" className="file-input" accept="image/*"></input>
            <label htmlFor="file-upload" className="upload-label">
              {desaparecidoData.urlFoto && <img src={desaparecidoData.urlFoto} alt="Desaparecido" className="preview-image upload-image"/>}
            </label>
          </div>
      <br></br><br></br>
        <FormLabel component="legend">Residente</FormLabel>
        <FormControlLabel
          control={<Checkbox 
            name="residente"        
            checked={desaparecidoData.residente === 'Si Recurrente' ? true : false} 
            onChange={ResidenteSiChange} />} 
          label="Si"
        />
        <FormControlLabel style={{ marginRight: '30px' }}
          control={<Checkbox 
            name="residente" 
            checked={desaparecidoData.residente === 'No Recurrente' ? true : false} 
            onChange={ResidenteNoChange} />}
          label="No"
        />
        <TextField style={{ marginRight: '30px', width: '300px' }}
          id="standard-textarea"
          label="Vestimenta"
          multiline
          size="small"
          name="vestimenta"
          value={desaparecidoData.vestimenta || ''}
          onChange={DesaparecidoDataChange}
        /> 
        <TextField style={{ marginRight: '30px', width: '250px' }}
          id="standard-textarea"
          label="Descripción General"          
          multiline
          size="small"
          name="descripcion"
          value={desaparecidoData.descripcion || ''}
          onChange={DesaparecidoDataChange}
        />       
        {/* Datos familiarles */}
        <h1 id='datosfamiliares'>Datos Generales De Los Familiares</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '61%', height: '5px' }}
          />
        </div><br></br>
        <TextField
          label="Nombre(s)"
          variant="outlined"
          size="small"
          name="nombre"
          value={familiarData.nombre || ''}
          onChange={FamiliarDataChange}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Paterno"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='app'
          value={familiarData.app || ''}
          onChange={FamiliarDataChange}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Apellido Materno"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='apm'
          value={familiarData.apm || ''}
          onChange={FamiliarDataChange}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Parentesco"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='parentesco'
          value={familiarData.parentesco || ''}
          onChange={FamiliarDataChange}
        />        
        <br></br><br></br>
        <FormLabel component="legend">Telefonos</FormLabel><br></br>
        <TextField style={{ marginRight: '30px' }}
          label="Opcion 1"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='telefonoUno'
          value={familiarData.telefonoUno || ''}
          onChange={FamiliarDataChange}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Opcion 2"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='telefonoDos'
          value={familiarData.telefonoDos || ''}
          onChange={FamiliarDataChange}
        />
        <TextField style={{ marginRight: '30px', width: '350px' }}
          label="Correo Electrónico"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='correo'
          value={familiarData.correo || ''}
          onChange={FamiliarDataChange}
        />
        <br></br><br></br>
        {/* domicilio del familiar */}
        <FormLabel component="legend">Domicilio</FormLabel><br></br>
        <TextField style={{ marginRight: '30px', width: '130px' }}
          label="Codigo Postal"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='codigopostal'
          value={domicilioData.codigopostal || ''}
          onChange={DomicilioDataChange}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Colonia"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='colonia'
          value={domicilioData.colonia || ''}
          onChange={DomicilioDataChange}
        />
        <TextField style={{ marginRight: '30px' }}
          label="Calle"
          id="outlined-size-small"         
          variant="outlined"
          size="small"
          name='calle'
          value={domicilioData.calle || ''}
          onChange={DomicilioDataChange}
        />
        <TextField style={{ marginRight: '30px', width: '130px' }}
          label="Núm. Ext."
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='noexterior'
          value={domicilioData.noexterior || ''}
          onChange={DomicilioDataChange}
        />
        <TextField style={{ marginRight: '30px', width: '110px' }}
          label="Núm. Int."
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='nointerior'
          value={domicilioData.nointerior || ''}
          onChange={DomicilioDataChange}
        />        
        <br/><br/>
        <h1 id='datosapariencia'> Datos De Apariencia</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '440px', height: '5px' }}
          />
        </div><br/>
            {/* media filacion datos */}
        <FormLabel component="legend">Media Filación</FormLabel><br></br>
        <Select style={{ marginRight: '30px', width: '150px' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mediaFilacionData.complexion}
          onChange={mediaFilacionDataChange}          
          size="small"
          name='complexion'
        >
          <MenuItem value="Complexion" disabled>
            <em>Complexión</em>
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
          {/* cabello datos  */}
        <FormLabel component="legend">Cabello</FormLabel><br></br>
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
            {/* datos de cejas */}
        <FormLabel component="legend">Cejas</FormLabel><br></br>
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
          {/* datos de los ojos */}
        <FormLabel component="legend">Ojos</FormLabel><br></br>
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
          {/* datos de nariz */}
        <FormLabel component="legend">Nariz</FormLabel><br></br>
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
        <FormLabel component="legend">Boca</FormLabel><br></br>
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
            <FormLabel component="legend">Frente</FormLabel><br></br>
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
        <FormLabel component="legend">Labios</FormLabel><br></br>
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
        <FormLabel component="legend">Menton</FormLabel><br></br>
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
          <FormLabel component="legend">Orejas</FormLabel><br></br> 
          <Select style={{ marginRight: '30px', width: '150px' }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              size="small"
              name='forma'
              value={orejasData.forma}
              onChange={OrejasDataChange}  
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
               
        <FormLabel component="legend">Hélix</FormLabel><br></br>
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

        <FormLabel component="legend">Lóbulo</FormLabel><br></br>
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

        <br></br><br></br><br/>

           
        
          {/* senas particulares */}
        <h1 id='señasparticulares'>Señales Particulares</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '430px', height: '5px' }}
          />
        </div><br /><br /><br />
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
                      (sp) => sp.tipo === 'Cicatrices' && sp.descripcion !== '')}
                />
              }
              label="Cicatrices"
              labelPlacement="start"
            />
            {sparticularesData.some((sp) => sp.tipo === 'Cicatrices') && (
              <TextField
                style={{ width: '400px' }}
                label="descripcion"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Cicatrices"
                value={sparticularesData.find((sp) => sp.tipo === 'Cicatrices')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Cicatrices')}
                
              />
            )}
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
                label="descripcion"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Lunares"
                value={sparticularesData.find((sp) => sp.tipo === 'Lunares')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Lunares')}
                
              />
            )}
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
                style={{ width: '400px' }}
                label="descripcion"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Tatuajes"
                value={sparticularesData.find((sp) => sp.tipo === 'Tatuajes')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Tatuajes')}
                
              />
            )}
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
                label="descripcion"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Protesis"
                value={sparticularesData.find((sp) => sp.tipo === 'Protesis')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Protesis')}
                
              />
            )}
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
                style={{ width: '400px' }}
                label="descripcion"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Defectos"
                value={sparticularesData.find((sp) => sp.tipo === 'Defectos')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Defectos')}
                
              />
            )}
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
                label="descripcion"
                variant="outlined"
                multiline
                id="outlined-size-small"
                size="small"
                name="Otros"
                value={sparticularesData.find((sp) => sp.tipo === 'Otros')?.descripcion || '' }
                onChange={(event) => spDescripcionChange(event, 'Otros')}
                
              />
            )}
          </Grid>
        </Grid>       
              
        <br/><br/><br/><br/>
        {/* datos de persona encontrada */}
        <h1 id='Encontrado'>Localizado</h1><br/><br/>
        <div className="image-container">
          <img
            src={linea_colores}
            alt="Barra de colores"
            style={{ width: '250px', height: '5px' }}
          />
        </div>
              
        
        <br></br><br></br>

        <TextField style={{ marginRight: '40px' }}
          label="Estado"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='estado'
          value={encontradoData.estado || ''}
          onChange={encontradoDataChange}
        />
        <TextField style={{ marginRight: '40px', width: '250px' }}
          label="Colonia"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='colonia'
          value={encontradoData.colonia || ''}
          onChange={encontradoDataChange}
        />
        <TextField style={{ marginRight: '40px', width: '220px' }}
          id="date"
          label="Fecha"
          type="date"
          name='fecha'
          value={encontradoData.fechaEncontrado || ''}
          onChange={encontradoDataChange}         
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <br></br><br></br><br></br>
        <TextField style={{ marginRight: '40px', width: '300px' }}
          label="Calle"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='calle'
          value={encontradoData.calle || ''}
          onChange={encontradoDataChange}
        />
        <TextField style={{ marginRight: '40px', width: '220px' }}
          label="Latitud"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='latitud'
          value={encontradoData.latitud || ''}
          onChange={encontradoDataChange}
        />
        <TextField style={{ marginRight: '40px', width: '200px' }}
          label="Longitud"
          id="outlined-size-small"          
          variant="outlined"
          size="small"
          name='longitud'
          value={encontradoData.longitud || ''}
          onChange={encontradoDataChange}
        />
        
        <br></br><br></br><br></br>

        <TextField style={{  width: '65%' }}
          id="standard-textarea"
          label="Descripción"
          multiline
          name='descripcion'
          value={encontradoData.descripcion || ''}
          onChange={encontradoDataChange}
        />
      </form>
    </div>

    </div>

  );

}

export default Actualizar;
