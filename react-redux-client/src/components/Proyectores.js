// ./react-redux-client/src/components/Proyectores.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import ProyectorEditForm from './ProyectorEditForm';

export default class Proyectores extends React.Component {
  constructor(props){
    super(props);

    this.handleEtiquetadoChange = this.handleEtiquetadoChange.bind(this);
    this.handleOperableChange = this.handleOperableChange.bind(this);

    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditProyector = this.submitEditProyector.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteProyector = this.cofirmDeleteProyector.bind(this);
  }


  handleEtiquetadoChange(event) {
    console.log("in handleEtiquetadoChange");
    this.setState({etiquetado: event.target.value}); 
}

handleOperableChange(event) {
  console.log("in handleOperableChange");
  this.setState({operable: event.target.value}); 
}

  componentWillMount(){
    this.props.fetchProyectores();
  }


  showEditModal(proyectorToEdit){
     this.props.mappedshowEditModal(proyectorToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditProyector(e){
    e.preventDefault();
    const editForm = document.getElementById('EditProyectorForm');
    if(editForm.ubiAlias.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('ubiAlias', editForm.ubiAlias.value);
      data.append('ubiInvent', editForm.ubiInvent.value);
      data.append('marca', editForm.marca.value);
      data.append('modelo', editForm.modelo.value);
      data.append('etiqueta', editForm.etiqueta.value);
      data.append('etiquetado', editForm.etiquetado.value);
      data.append('año', editForm.año.value);
      data.append('sn', editForm.sn.value);
      data.append('ip', editForm.ip.value);
      data.append('password', editForm.password.value);
      data.append('operable', editForm.operable.value);
      data.append('observaciones', editForm.observaciones.value);
      
      this.props.mappedEditProyector(data);
    }
    else{
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(proyectorToDelete){
    this.props.mappedshowDeleteModal(proyectorToDelete);
  }

  cofirmDeleteProyector(){
    this.props.mappedDeleteProyector(this.props.mappedProyectorState.proyectorToDelete);
  }

  render(){
    const proyectorState = this.props.mappedProyectorState;
    const proyectors = proyectorState.proyectors;
    const editProyector = proyectorState.proyectorToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Proyectores</h3>
      {!proyectors && proyectorState.isFetching &&
        <p>Loading proyectors....</p>
      }
      {proyectors.length <= 0 && !proyectorState.isFetching &&
        <p>No Proyectores Available. Add A Proyector to List here.</p>
      }
      {proyectors && proyectors.length > 0 && !proyectorState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Proyector</th><th className="textCenter">Editar</th><th className="textCenter">Eliminar</th><th className="textCenter">Ver</th></tr>
      </thead>
      <tbody>
        {proyectors.map((proyector,i) => <tr key={i}>
        <td>{proyector.ubiAlias}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(proyector)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(proyector)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/${proyector._id}`}>Ver detalles</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }

    {/* Modal for editing proyector */}
    <Modal
      show={proyectorState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Proyector</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editProyector  &&
    <ProyectorEditForm proyectorData={editProyector} editProyector={this.submitEditProyector} />
    }
    {editProyector  && proyectorState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editProyector  && !proyectorState.isFetching && proyectorState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {proyectorState.error} </strong>
      </Alert>
    }
    {editProyector  && !proyectorState.isFetching && proyectorState.successMsg &&
      <Alert bsStyle="success">
  Book <strong> {editProyector.ubiAlias} </strong>{proyectorState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

{/* Modal for deleting proyector */}
    <Modal
    show={proyectorState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Eliminar proyector</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {proyectorState.proyectorToDelete && !proyectorState.error && !proyectorState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this proyector <strong>{proyectorState.proyectorToDelete.ubiAlias} </strong> ?
</Alert>
    }
    {proyectorState.proyectorToDelete && proyectorState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{proyectorState.error} </strong>
</Alert>
    }

    {proyectorState.proyectorToDelete && !proyectorState.error && proyectorState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!proyectorState.proyectorToDelete && !proyectorState.error && !proyectorState.isFetching&&
      <Alert bsStyle="success">
 Proyector <strong>{proyectorState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!proyectorState.successMsg && !proyectorState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteProyector}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {proyectorState.successMsg && !proyectorState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}
