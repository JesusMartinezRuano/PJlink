// ./react-redux-client/src/components/Proyector.js
import React from 'react';
import  {Button,FormGroup,Table} from 'react-bootstrap'; //Added
import jsPDF from 'jspdf';                                //Added

import JsBarcode from 'jsbarcode';                      //Added



var col1 = {                                                // added
  textAlign : 'right',
  fontWeight : 'bold',
  borderBottom:'thin double #808080'
};
var col2 = {                                                //added
  textAlign : 'left',
  borderBottom:'thin double #808080'
};

function handleClick(proyector,e) {                         //added
  
  
  e.preventDefault();
  console.log('gen pdf was clicked.',proyector.ubiAlias);
  console.log('Ubi alias: ', proyector.ubiAlias);
  var canvas = document.createElement('CANVAS');
  JsBarcode(canvas, proyector.ubiInvent);
  var img = canvas.toDataURL();
  var doc = new jsPDF('p','mm','a4');
  doc.addImage(img,5,5,93.66,37.5);
  JsBarcode(canvas, proyector.etiqueta);
  var img = canvas.toDataURL();
  doc.addImage(img,100,5,52.92,37.5);
  doc.save("test.pdf");
}


export default class Proyector extends React.Component {
  componentDidMount(){
    this.props.mappedfetchProyectorById(this.props.params.id);
  }

  render(){
    const proyectorState = this.props.mappedProyectorState;
    //console.log("id : ",this.props.params.id);
    if (!proyectorState.isFetching) {
      //console.log("ubi alias : ", proyectorState.ubiAlias);
    }
    
    return(
      
      
      <div>
      
      <h2>Detalles del Proyector</h2>
         {!proyectorState.proyector && proyectorState.isFetching &&
           <div>
             <p>Cargando proyector....</p>
           </div>
         }
       {proyectorState.proyector && !proyectorState.isFetching &&
        <div>                 
          <Table>
            <tbody>
              <tr><td style={col1}></td><td style={col2}><h3>{proyectorState.proyector.ubiAlias}</h3></td></tr>
              <tr><td style={col1}>Ubicación de inventario &nbsp; </td><td style={col2}>{proyectorState.proyector.ubiInvent}</td></tr>
              <tr><td style={col1}>Marca &nbsp; </td><td style={col2}>{proyectorState.proyector.marca}</td></tr>
              <tr><td style={col1}>Modelo &nbsp; </td><td style={col2}>{proyectorState.proyector.modelo}</td></tr>
              <tr><td style={col1}>Etiqueta &nbsp; </td><td style={col2}>{proyectorState.proyector.etiqueta}</td></tr>
              <tr><td style={col1}>Etiquetado &nbsp; </td><td style={col2}>{proyectorState.proyector.etiquetado}</td></tr>
              <tr><td style={col1}>Año &nbsp; </td><td style={col2}>{proyectorState.proyector.año}</td></tr>
              <tr><td style={col1}>Número de serie &nbsp; </td><td style={col2}>{proyectorState.proyector.sn}</td></tr>
              <tr><td style={col1}>IP &nbsp; </td><td style={col2}>{proyectorState.proyector.ip}</td></tr>
              <tr><td style={col1}>Password &nbsp; </td><td style={col2}>{proyectorState.proyector.password}</td></tr>
              <tr><td style={col1}>Operable &nbsp; </td><td style={col2}>{proyectorState.proyector.operable}</td></tr>
              <tr><td style={col1}>Observaciones &nbsp; </td><td style={col2}>{proyectorState.proyector.observaciones}</td></tr>              
            </tbody>
          </Table>
          <form>
            <FormGroup>
              <Button type="submit" bsStyle="danger" bsSize="small" block onClick={(e)=>handleClick(proyectorState.proyector,e)}>Generar PDF</Button>
              
            </FormGroup>
          </form>          
        </div>
        
       }
      </div>
    
    );
  }
}
