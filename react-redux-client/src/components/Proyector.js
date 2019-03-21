// ./react-redux-client/src/components/Proyector.js
import React from 'react';

export default class Proyector extends React.Component {
  componentDidMount(){
    this.props.mappedfetchProyectorById(this.props.params.id);
  }

  render(){
    const proyectorState = this.props.mappedProyectorState;
    

    return(
      <div className="proyectorDetail">
       <h2>Proyector Detail</h2>
         {!proyectorState.proyector && proyectorState.isFetching &&
           <div>
             <p>Loading proyector....</p>
           </div>
         }
       {proyectorState.proyector && !proyectorState.isFetching &&
         <div>
           <h3>{proyectorState.proyector.ubiAlias}</h3>
           <p>{proyectorState.proyector.ubiInvent}</p>
           <p>{proyectorState.proyector.marca}</p>
           <p>{proyectorState.proyector.modelo}</p>
           <p>{proyectorState.proyector.etiqueta}</p>
           <p>{proyectorState.proyector.etiquetado}</p>
           <p>{proyectorState.proyector.año}</p>
           <p>{proyectorState.proyector.sn}</p>
           <p>{proyectorState.proyector.ip}</p>
           <p>{proyectorState.proyector.password}</p>
           <p>{proyectorState.proyector.operable}</p>
           <p>{proyectorState.proyector.observaciones}</p>

         </div>
       }
      </div>
    );
  }
}
