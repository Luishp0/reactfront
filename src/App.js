import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Registro from './components/Registro.js';
import Login from './components/Login.js';
import Tabla from './components/Tabla.js';
import PrincipalCompleto from './FPrincipal/PrincipalCompleto.js';
import PrincipalActualizar from './FPrincipal/PrincipalActualizar.js'
import FichaCompleja from './FPrincipal/FichaCompleja.js';
import Fichasimple from './FPrincipal/Fichasimple.js';
import Grafica from './FPrincipal/Grafica.js';
import CarpetaD from './components/CarpetaD.js';
import Grafica2 from './FPrincipal/Graficados.js'
import TablaUs from './components/TablaUs.js'
import PrincipalUsCom from './FPrincipal/PrincipalUsCom.js'
import Localizado from './FPrincipal/LocalizadoCom.js'
import GraficaUs from './FPrincipal/GraficaUs.js'
import Grafica2Us from './FPrincipal/GraficadosUs.js'
import FichasimpleUs from './FPrincipal/FichasimpleUs.js'

function App() {
  return (
    <div >     
        
        <BrowserRouter>
          <Routes>
            <Route path='/'          element= { <Login/>   }/> 
            <Route path='/create'    element= { <Registro/>}/>
            <Route path='/tabla/:userId'     element= { <Tabla/>   }/>
            <Route path='/principal/:userId' element= { <PrincipalCompleto/>}/>
            <Route path='/actualizar/:id/:userId' element={ <PrincipalActualizar/>}/>

            <Route path='/fichacompleta/:id/:userId' element={<FichaCompleja/>}/>
            <Route path='/fichasimple/:id/:userId' element={<Fichasimple/>}/>
            <Route path='/fichasimpleUs/:id/:userId' element={<FichasimpleUs/>}/>

            <Route path='/grafica/:userId' element={<Grafica/>}/>
            <Route path='/graficaUs/:userId' element={<GraficaUs/>}/>

            <Route path='/detalle-grafica/:userId/:colonia' element={<Grafica2/>}/>
            <Route path='/detalle-grafica-Us/:userId/:colonia' element={<Grafica2Us/>}/>
            <Route path='/carpetad/:userId' element={<CarpetaD/>}/>
            <Route path='/tablaUs/:userId' element={<TablaUs/>} />
            <Route path='/principalUs/:userId' element={<PrincipalUsCom/>} />

            <Route path='/localizado/:id/:userId' element={ <Localizado/> }/>

          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
