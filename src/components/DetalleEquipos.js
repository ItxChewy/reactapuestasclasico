import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import { NavLink } from 'react-router-dom'

export default class DetalleEquipos extends Component {
    state = {
        equipo: []
    }
    loadEquipo = () => {
        var request = "api/equipos/" + this.props.id
        axios.get(Global.urlApi + request).then(response => {
            this.setState({
                equipo: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadEquipo();
    }
    componentDidUpdate = (prevProps) =>{
        if(prevProps.id != this.props.id){
            this.loadEquipo();
        }
    }
    render() {
        return (
            <div style={{ padding: "5%" }}>
                <h1>{this.state.equipo.nombre}</h1>
                {
                    this.state.equipo &&
                    (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={this.state.equipo.imagen} className="card-img-top" alt="..."  />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.equipo.nombre}</h5>
                                <p className="card-text">{this.state.equipo.descripcion}</p>
                                <NavLink to={"/"} >
                                <button className="btn btn-primary">Home</button>
                                </NavLink>
                                <NavLink to={"/apuestas"}>
                                <button className="btn btn-success"> Apuestas</button>
                                </NavLink>
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}
