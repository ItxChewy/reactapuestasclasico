import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'

export default class MenuEquipos extends Component {
    state ={
        equipos:[]
    }

    loadEquipos = () =>{
        let request = "api/equipos"
        axios.get(Global.urlApi + request).then(response =>{
            this.setState({
                equipos:response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadEquipos();
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand nav-link" to="/">Equipos</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Crear Coches</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Hospitales</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Detalles</NavLink>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Lista equipos</a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.equipos.map((equipo,index) =>{
                                                return(
                                                    <li key={index}>
                                                        <NavLink to={"/equipo/" + equipo.idEquipo} className={"dropdown-item"}>{equipo.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
      </div>
    )
  }
}
