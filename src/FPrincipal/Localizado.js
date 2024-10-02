import {React , useState } from 'react';
import './Css/actualizar.css';
import './Footer.js';
import { TextField,  Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';



const URIencontrado = `http://${process.env.REACT_APP_HOSTAPI}/encontrado/`

    

function Localizado () {

    const navigate = useNavigate() 
    const {id,userId} = useParams() 

          //encontrado//
          const [encontradoData, setEncontradoData] = useState({
            estado:'',
            colonia:'',
            fecha:'',
            descripcion:'',
            calle:'',
            latitud:'',
            longitud:'',
          })
          const encontradoDataChange = (event)=>{
            const {name, value} = event.target;
            setEncontradoData((prevData)=>({
              ...prevData,
              [name]: value,
            }))              
          }

        //guardar informacion de la persona encontrada
        const storeEncontrado = async (e) => {
          e.preventDefault();
        
          // Mostrar el diálogo de Swal para confirmar la acción
          Swal.fire({
            title: '¿Quieres guardar los cambios?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Guardar',
            denyButtonText: `No guardar`,
          }).then(async (result) => {
            if (result.isConfirmed) {
              if (
                encontradoData.estado.trim() === '' ||
                encontradoData.calle.trim() === '' ||
                encontradoData.colonia.trim() === '' ||
                encontradoData.fecha.trim() === '' ||
                encontradoData.latitud.trim() === '' ||
                encontradoData.longitud.trim() === ''
              ) {
                Swal.fire('Error', 'Debes Completar todos los campos', 'error');
                return;
              }
        
              const encontrado = {
                desaparecido_iddesaparecido: id,
                estado: encontradoData.estado,
                colonia: encontradoData.colonia,
                fechaEncontrado: encontradoData.fecha,
                descripcion: encontradoData.descripcion,
                calle: encontradoData.calle,
                latitud: encontradoData.latitud,
                longitud: encontradoData.longitud,
              };
        
              try {
                await axios.post(URIencontrado, encontrado);
        
                // Para desactivar el desaparecido, como dar de baja
                await axios.put(`http://${process.env.REACT_APP_HOSTAPI}/desaparecido/desactivar/${id}`);
        
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: 'Los cambios se guardaron',
                  showConfirmButton: false,
                  timer: 1500,
                });
        
                navigate(`/tablaUS/${userId}`);
              } catch (error) {
               
                Swal.fire('Error', 'Ha ocurrido un error al guardar los cambios', 'error');
              }
            } else if (result.isDenied) {
              Swal.fire('Los cambios no se guardaron', '', 'info');
            }
          });
        };
        


        const NavigateToTablaUs = () => {
            navigate(`/tablaUs/${userId}`);
          };

    return(

        <form>
            <br/><br/><br/>
        {/*boton de guardar al encontrar al desaparecido */}
        <div   style={{ display: 'flex', justifyContent: 'flex-end',  }}>
         <div>
           
             <Button variant="contained" color="primary" onClick={storeEncontrado} component="span" style={{marginRight: '30px',background: 'rgba(253, 73, 92, 0.75)', fontSize:'15px', marginTop:'-50px'}}>
               Guardar              
             </Button>              
           
         </div>
         <div style={{float:'left'}}>
           
             <Button variant="contained" color="primary" onClick={NavigateToTablaUs} component="span" style={{marginRight: '30px', background: 'rgba(241,138,0, 0.75)' ,fontSize:'15px', marginTop:'-50px'}}>
               Regresar            
             </Button>              
           
         </div>
       </div>
       <br></br><br></br>

       <div className="container">

       <TextField style={{ marginRight: '40px' }}
         label="Estado"
         id="outlined-size-small"          
         variant="outlined"
         size="small"
         name='estado'
         value={encontradoData.estado || ''}
         onChange={encontradoDataChange}
       />
       <TextField style={{ marginRight: '40px' }}
         label="Colonia"
         id="outlined-size-small"          
         variant="outlined"
         size="small"
         name='colonia'
         value={encontradoData.colonia || ''}
         onChange={encontradoDataChange}
       />
       <TextField style={{ marginRight: '40px', width: '200px' }}
         id="date"
         label="Fecha"
         type="date"
         name='fecha'
         value={encontradoData.fecha || ''}
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
       <TextField style={{ marginRight: '40px', width: '290px' }}
         label="Latitud"
         id="outlined-size-small"          
         variant="outlined"
         size="small"
         name='latitud'
         value={encontradoData.latitud || ''}
         onChange={encontradoDataChange}
       />
       <TextField style={{ marginRight: '40px', width: '290px' }}
         label="Longitud"
         id="outlined-size-small"          
         variant="outlined"
         size="small"
         name='longitud'
         value={encontradoData.longitud || ''}
         onChange={encontradoDataChange}
       />
       
       <br></br><br></br><br></br>

       <TextField style={{  width: '59%' }}
         id="standard-textarea"
         label="Descripcion"
         multiline
         name='descripcion'
         value={encontradoData.descripcion || ''}
         onChange={encontradoDataChange}
       />
       </div>
   </form>
   
    
    )
}

export default Localizado