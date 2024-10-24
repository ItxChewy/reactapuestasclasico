import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {

    cajaUser = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    state = {
        apuestas: []
    }

    loadApuestas = () => {
        let request = "api/apuestas"
        axios.get(Global.urlApi + request).then(response => {
            this.setState({
                apuestas: response.data
            })
        })
    }

    crearApuesta = (e) => {
        e.preventDefault();
        console.log(typeof (this.cajaFecha.current.value))
        let apuesta = {
            idApuesta: 1,
            usuario: this.cajaUser.current.value,
            resultado: this.cajaResultado.current.value,
            fecha: this.cajaFecha.current.value
        }
        let request = "api/apuestas"
        axios.post(Global.urlApi + request, apuesta).then(response => {
            this.loadApuestas();
        })

    }

    componentDidMount = () => {
        this.loadApuestas()
    }

    render() {
        return (
            <div style={{ padding: "5%" }}>
                <h1>Apuestas</h1>
                <table className='table table-bordered table-light table-striped'>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Resultado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((valor, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{valor.usuario}</td>
                                        <td>{valor.resultado}</td>
                                        <td>{valor.fecha}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <NavLink to={"/"}>
                    <button className='btn btn-dark'>
                        Home
                    </button>
                </NavLink>
                <hr></hr>
                <h1>Crear Nueva Apuesta</h1>
                <form className='form' onSubmit={this.crearApuesta}>
                    <label className='form-label'>Usuario</label>
                    <input className='form-control' ref={this.cajaUser}></input>
                    <label className='form-label'>Resultado</label>
                    <input className='form-control' ref={this.cajaResultado}></input>
                    <label className='form-label'>Fecha</label>
                    <input type="date" className='form-control' ref={this.cajaFecha}></input><br></br>
                    <button className='btn btn-primary'>Crear apuesta</button>
                </form>
            </div>
        )
    }
}
