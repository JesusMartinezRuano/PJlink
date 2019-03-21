// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import ProyectorForm from './ProyectorForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddProyector = this.toggleAddProyector.bind(this);
    this.addProyector = this.addProyector.bind(this);
  }

  toggleAddProyector(e){
    e.preventDefault();
     this.props.mappedToggleAddProyector();
  }

  addProyector(e){
      e.preventDefault();
      const form = document.getElementById('addProyectorForm');
      if(form.ubiAlias.value !== ""
        && form.ubiInvent.value !== ""
        && form.marca.value !== ""
        && form.modelo.value !== ""
        && form.etiqueta.value !== ""
        && form.etiquetado.value !== ""
        && form.año.value !== ""
        && form.sn.value !== ""
        && form.ip.value !== ""
        && form.password.value !== ""
        && form.operable.value !== ""
        && form.observaciones.value !== ""
        ){
        const data = new FormData();
        data.append('ubiAlias', form.ubiAlias.value);
        data.append('ubiInvent', form.ubiInvent.value);
        data.append('marca', form.marca.value);
        data.append('modelo', form.modelo.value);
        data.append('etiqueta', form.etiqueta.value);
        data.append('etiquetado', form.etiquetado.value);
        data.append('año', form.año.value);
        data.append('sn', form.sn.value);
        data.append('ip', form.ip.value);
        data.append('password', form.password.value);
        data.append('operable', form.operable.value);
        data.append('observaciones', form.observaciones.value);
        // const data = {
        //   ubiAlias: form.ubiAlias.value,
        //   ubiInvent: form.ubiInvent.value
        // }
        this.props.mappedAddProyector(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Gestión de Proyectores</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Inicio</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddProyector}>
         <NavItem eventKey={1}>Añadir Proyector</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddProyector &&
    <ProyectorForm addProyector={this.addProyector} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
