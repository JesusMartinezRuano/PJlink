// ./react-redux-client/src/components/ProyectorEditForm.js
import React from 'react';
import { FormGroup,ControlLabel ,FormControl ,Button } from 'react-bootstrap';

const ProyectorEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditProyectorForm" onSubmit={props.editProyector}>      
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel >Ubicación Alias: </ControlLabel>
          <input type="hidden" value={props.proyectorData._id || ''} name="id"/>
          <FormControl componentClass="textarea" placeholder="alias de ubicación" name="ubiAlias" defaultValue={props.proyectorData.ubiAlias} />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>        
          <ControlLabel >Ubi Invent: </ControlLabel>
          <FormControl 
            componentClass="textarea" placeholder="ubicación de inventario" name="ubiInvent" defaultValue={props.proyectorData.ubiInvent} />
        </FormGroup>
      </div>      
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Marca: </ControlLabel>
          <FormControl componentClass="textarea" placeholder="marca" name="marca" defaultValue={props.proyectorData.marca}/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Modelo </ControlLabel>
          <FormControl componentClass="textarea" placeholder="modelo" name="modelo" defaultValue={props.proyectorData.modelo}/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Etiqueta :</ControlLabel>
          <FormControl componentClass="textarea" placeholder="numero de etiqueta en inventario" name="etiqueta" defaultValue={props.proyectorData.etiqueta} />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup >
          <ControlLabel>Etiquetado :</ControlLabel>
          <select className="form-control" name="etiquetado" defaultValue={props.proyectorData.etiquetado} onChange={this.handleEtiquetadoChange}>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup >
          <ControlLabel>Año </ControlLabel>
          <FormControl componentClass="textarea" placeholder="año de compra" name="año" defaultValue={props.proyectorData.año}/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Número de serie : </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Número de serie" name="sn" defaultValue={props.proyectorData.sn} />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Dirección IP : </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Direción IP" name="ip" defaultValue={props.proyectorData.ip}/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Password : </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Password" name="password" defaultValue={props.proyectorData.password}/>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Operable : </ControlLabel>        
          <select className="form-control" name="operable" defaultValue={props.proyectorData.operable} onChange={this.handleOperableChange}>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Observaciones : </ControlLabel>
          <FormControl componentClass="textarea" placeholder="Observaciones" name="observaciones" defaultValue={props.proyectorData.observaciones} />
        </FormGroup>
      </div>
      <div className="col-md-12">     
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Actualizar</Button>
        </FormGroup>
      </div>
    </form>
  );
}
export default ProyectorEditForm;
