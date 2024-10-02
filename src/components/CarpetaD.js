import React, { useState } from 'react';
import { Button, Modal, Paper } from '@mui/material';
import { SlNote } from 'react-icons/sl';
import { PiCameraPlusBold } from "react-icons/pi";
import { MdOutlinePhotoCamera, } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { RiMovieLine } from 'react-icons/ri';
import { BsFolder2Open } from 'react-icons/bs';
import linea_colores from './img/linea_colores.png';
import prueba from './img/user.png';
import './Css/Carpeta.css';
import { RxExit } from "react-icons/rx";
import logotlajo from './img/logotlajo.png';

const CarpetaD = () => {
  
  const [modalNotasOpen, setModalNotasOpen] = useState(false);
  const [nota, setNota] = useState('');
  const [modalAgregarOpen, setModalAgregarOpen] = useState(false);
  const [modalAgregarMediaOpen, setModalAgregarMediaOpen] = useState(false);
  const [modalAgregarDocsOpen, setModalAgregarDocsOpen] = useState(false);
  const [modalAgregarVideosOpen, setModalAgregarVideosOpen] = useState(false);
  const [contenido, setContenido] = useState('');
  const [media, setMedia] = useState('');
  const [documento, setDocumento] = useState('');
  const [video, setVideo] = useState('');
  const [notas, setNotas] = useState([]);


  const handleOpenModalNotas = () => {
    setModalNotasOpen(true);
  };

  const handleCloseModalNotas = () => {
    setModalNotasOpen(false);
  };

  const handleChangeNota = (event) => {
    setNota(event.target.value);
  };

  const handleOpenModalAgregar = () => {
    setModalAgregarOpen(true);
  };

  const handleCloseModalAgregar = () => {
    setModalAgregarOpen(false);
  };

  const handleOpenModalAgregarMedia = () => {
    setModalAgregarMediaOpen(true);
  };

  const handleCloseModalAgregarMedia = () => {
    setModalAgregarMediaOpen(false);
  };

  const handleOpenModalAgregarDocs = () => {
    setModalAgregarDocsOpen(true);
  };

  const handleCloseModalAgregarDocs = () => {
    setModalAgregarDocsOpen(false);
  };

  const handleOpenModalAgregarVideos = () => {
    setModalAgregarVideosOpen(true);
  };

  const handleCloseModalAgregarVideos = () => {
    setModalAgregarVideosOpen(false);
  };

  const handleChangeContenido = (event) => {
    setContenido(event.target.value);
  };


  const handleChangeDocumento = (event) => {
    setDocumento(event.target.value);
  };

  const handleChangeVideo = (event) => {
    setVideo(event.target.value);
  };

  const handleAgregarContenido = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    if (contenido.trim() !== '') {
      setNotas([...notas, contenido]);
      setContenido('');
    }
  };

  const handleAgregarMedia = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    console.log('Media:', media);
    setModalAgregarMediaOpen(false);
    setMedia('');
  };

  const handleAgregarDocumento = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    console.log('Documento:', documento);
    setModalAgregarDocsOpen(false);
    setDocumento('');
  };

  const handleAgregarVideo = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    console.log('Video:', video);
    setModalAgregarVideosOpen(false);
    setVideo('');
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
              <Button
                variant="contained"
                color="secondary"
                href="/tabla"
                style={{ marginRight: '20px', borderRadius: '5px', background: 'rgba(253, 73, 92, 0.75)', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}
              >
                <RxExit className='iconos' />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contenedor-principal">
        <div className="Iz-cont">
          <div className="butts-carpe">
            <button className="butt-Fo" onClick={handleOpenModalAgregarMedia}>
              <MdOutlinePhotoCamera className="foto-icon" />
              Fotos
            </button>
            <button className="butt-Vi" onClick={handleOpenModalAgregarVideos}>
              <RiMovieLine className="video-icon" />
              Videos
            </button>
            <button className="butt-Doc" onClick={handleOpenModalAgregarDocs}>
              <HiDocumentText className="doc-icon" />
              Documentos
            </button>
          </div>
          <div className="but-Notas">
            <button className="butt-Not" onClick={handleOpenModalNotas}>
              <SlNote className="not-icon" />
              Notas
            </button>
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
                  <button onClick={handleCloseModalNotas} className="close-button">
                    X
                  </button>
                  <img className="img-barrrita" src={linea_colores} alt="Barra" />
                </div>
                <div className="conta-not">
                  <div className="container-notas">
                    <form onSubmit={handleAgregarContenido} className="form-s">
                      <textarea
                        multiline
                        rows={4}
                        value={contenido}
                        onChange={handleChangeContenido}
                        fullWidth
                        style={{ width: '100%', height: '50px' }}
                      />
                      <div className="contenedor-notas-guardadas">
                        <h3>Notas Guardadas:</h3>
                        <ul>
                          {notas.map((nota, index) => (
                            <li key={index}>{nota}</li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="contained" type="submit">
                        Agregar
                      </Button>
                    </form>
                  </div>
                </div>
              </Paper>
            </Modal>
          </div>
        </div>
        <div className="cover-carpeta">
          <div className="central-carpeta">
            <h1 className="tit-carp">
              <BsFolder2Open className="not" />
              Carpeta
            </h1>
            <img className="img-barra" src={linea_colores} alt="Barra" />
          </div>
          <div className="images-conta">
            <div className="contenedor-img">
              <div className="cont-images">
                <img className="img-prueba2" src={prueba} alt="Imagen 1" />
              </div>
            </div>
            <div className="contenedor-img">
              <div className="cont-images">
                <img className="img-prueba2" src={prueba} alt="Imagen 2" />
              </div>
            </div>
            <div className="contenedor-img">
              <div className="cont-images">
                <img className="img-prueba2" src={prueba} alt="Imagen 3" />
              </div>
            </div>
          </div>
        </div>
        {/* Modal para agregar imágenes */}
        <Modal
          open={modalAgregarMediaOpen}
          onClose={handleCloseModalAgregarMedia}
          className="modal-custom"
        >
          <Paper className="paper-custom">
            <div className="modal-header">
              <h2 className="tit-carpet">
                <MdOutlinePhotoCamera className="media-icon" />
                  Fotos 
              </h2>
              <button onClick={handleCloseModalAgregarMedia} className="close-button">
                X
              </button>
            </div>
            <img className="img-barrrita" src={linea_colores} alt="Barra" /><br />
            <div className="conta-not">
              <div className="container-notas">
                <form onSubmit={handleAgregarMedia} className="form-s">
                <div className="upload-box2">
                      <input type="file" id="file-upload" className="file-input2" accept="image/*"></input>
                      <label htmlFor="file-upload" className="upload-label2">
                        <PiCameraPlusBold className='icon' />
                      </label>
                    </div><br /><br /><br /><br />
                  <Button variant="contained" type="submit">
                    Agregar
                  </Button>
                </form>
              </div>
            </div>
          </Paper>
        </Modal>
        {/* Modal para agregar documentos */}
        <Modal
          open={modalAgregarDocsOpen}
          onClose={handleCloseModalAgregarDocs}
          className="modal-custom"
        >
          <Paper className="paper-custom">
            <div className="modal-header">
              <h2 className="tit-carpet">
                <HiDocumentText className="doc-icon" />
                 Documentos
              </h2>
              <button onClick={handleCloseModalAgregarDocs} className="close-button">
                X
              </button>
            </div>
            <img className="img-barrrita" src={linea_colores} alt="Barra" /><br />
            <div className="conta-not">
              <div className="container-notas">
                <form onSubmit={handleAgregarDocumento} className="form-s">
                <div className="upload-container">
                  <input
                    type="text"
                    value={documento}
                    onChange={handleChangeDocumento}
                    placeholder="URL del documento"
                    style={{ width: '100%', height: '30px' }}
                  /></div><br /><br /><br /><br />
                  <Button variant="contained" type="submit">
                    Agregar
                  </Button>
                </form>
              </div>
            </div>
          </Paper>
        </Modal>
        {/* Modal para agregar videos */}
        <Modal
          open={modalAgregarVideosOpen}
          onClose={handleCloseModalAgregarVideos}
          className="modal-custom"
        >
          <Paper className="paper-custom">
            <div className="modal-header">
              <h2 className="tit-carpet">
                <RiMovieLine className="video-icon" />
               Videos
              </h2>
              <button onClick={handleCloseModalAgregarVideos} className="close-button">
                X
              </button>
            </div>
            <img className="img-barrrita" src={linea_colores} alt="Barra" /><br />
            <div className="conta-not">
            <div className="container-notas">
                <form onSubmit={handleAgregarVideo} className="form-s">
                <div className="upload-container">
                  <input
                    type="text"
                    value={video}
                    onChange={handleChangeVideo}
                    placeholder="URL del video"
                    style={{ width: '100%', height: '30px' }}
                  /></div><br /><br /><br /><br />
                  <Button variant="contained" type="submit">
                    Agregar
                  </Button>
                </form>
              </div>
            </div>
          </Paper>
        </Modal>
      </div>
    </div>
  );
};

export default CarpetaD;
