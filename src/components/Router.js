import React, { Component } from 'react'
import { BrowserRouter, Routes,Route, useActionData, useParams } from 'react-router-dom'
import MenuEquipos from './MenuEquipos'
import DetalleEquipos from './DetalleEquipos';
import Apuestas from './Apuestas';
import Home from './Home';

export default class Router extends Component {
  render() {
    function DetalleEquiposElement(){
        let {idequipo} = useParams();
        return(<DetalleEquipos id={idequipo} />)
    }
    return (
      <BrowserRouter>
      <MenuEquipos/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/equipo/:idequipo' element={<DetalleEquiposElement/>}/>
            <Route path='/apuestas' element = {<Apuestas/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
