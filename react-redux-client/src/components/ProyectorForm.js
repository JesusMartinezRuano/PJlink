// ./react-redux-client/src/components/ProyectorForm.js
import React from 'react';
import { FormGroup,ControlLabel ,FormControl, Button } from 'react-bootstrap';

const ProyectorForm = (props) => {
  return (
    <form className="form-horizontal" id="addProyectorForm" onSubmit={props.addProyector}>
      <h3 className="centerAlign">Añadir Proyector</h3>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>ubiAlias: </ControlLabel>
          <FormControl type="textarea" placeholder="alias de ubicación" name="ubiAlias"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>ubiInvent: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="alias de inventario" name="ubiInvent" />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Marca: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="marca" name="marca"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Modelo: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="modelo" name="modelo"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Etiqueta: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="número de etiqueta de inventario" name="etiqueta" />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Etiquetado: </ControlLabel>        
          <select className="form-control" name="etiquetado" defaultValue={"true"} onChange={this.handleEtiquetadoChange}>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Año: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Año de compra" name="año"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>SN:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Número de serie" name="sn"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>IP: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Dirección IP" name="ip"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Password: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Password" name="password" />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Operable: </ControlLabel>       
          <select className="form-control" name="operable" defaultValue={"true"} onChange={this.handleOperableChange}>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Observaciones: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Observaciones" name="observaciones"/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
        </FormGroup>
      </div>
    </form>
  );
}

export default ProyectorForm;
