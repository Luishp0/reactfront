import axios from 'axios'
import { useState, useEffect} from 'react'
import {Link } from 'react-router-dom'

const URI = 'http://localhost:8000/users/'

const CompShowUsers = () => {
    const [users, setUser] = useState([])
    useEffect( () => {
        getUsers()
    },[])
    //procedimiento para mostar todos los usuarios
    const getUsers = async () =>{
        const res = await axios.get(URI)
        setUser(res.data)
    }
    //procedimiento para eliminar un usuairo
    const deleteUser = async (id) => {
        axios.delete(`${URI}${id}`)
        getUsers()
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <p>Crear</p>
                    <Link to='/create' className='btn btn-primary btn-lg'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Correo Electronico</th>
                                <th>Telefono</th>
                                <th>Acciones</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { users.map( (user) => (
                                <tr key={ user.id }>
                                    <td>{ user.nombre }</td>
                                    <td>{ user.app }</td>
                                    <td>{ user.apm }</td>
                                    <td>{ user.correo }</td>
                                    <td>{ user.telefono }</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-info' ><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=>deleteUser(user.id) } className='btn btn-danger' ><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default CompShowUsers