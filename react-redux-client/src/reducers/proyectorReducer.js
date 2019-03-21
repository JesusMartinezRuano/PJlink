// ./react-redux-client/src/reducers/proyectorReducer.js
const INITIAL_STATE = {
  proyectors:[],
  proyector:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  proyectorToDelete: null,
  showEditModal: false,
  proyectorToEdit: null,
  newProyector: null
}

export  const proyectorReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PROYECTORS_REQUEST':
          return {
            ...currentState,
            proyectors:[],
            proyector:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
          }

    case 'FETCH_PROYECTORS_SUCCESS':
          return {
            ...currentState,
            proyectors:action.proyectors,
            proyector:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
          }

    case 'FETCH_PROYECTORS_FAILED':
          return {
            ...currentState,
            proyectors:[],
            proyector:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
          }

    case 'FETCH_PROYECTOR_REQUEST':
          return {
            ...currentState,
            proyectors:currentState.proyectors,
            proyector:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
          }

    case 'FETCH_PROYECTOR_SUCCESS':
          return {
            ...currentState,
            proyectors:currentState.proyectors,
            proyector:action.proyector,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
          }

    case 'FETCH_PROYECTOR_FAILED':
          return {
            ...currentState,
            proyectors:[],
            proyector:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
          }

    case 'ADD_NEW_PROYECTOR_REQUEST':
          return {
            ...currentState,
            proyectors:currentState.proyectors,
            proyector:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
            newProyector: action.proyector
          }

    case 'ADD_NEW_PROYECTOR_REQUEST_FAILED':
          return {
            ...currentState,
            proyectors:currentState.proyectors,
            proyector:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
            newProyector: null
          }

    case 'ADD_NEW_PROYECTOR_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            proyectors:[...currentState.proyectors, action.proyector],
            proyector:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: false,
            proyectorToEdit: null,
            newProyector: action.proyector
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          proyectorToDelete: null,
          showEditModal: true,
          proyectorToEdit: action.proyector,
          newProyector: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          proyectorToDelete: null,
          showEditModal: false,
          proyectorToEdit: null,
          newProyector: null
        }

    case 'EDIT_PROYECTOR_REQUEST':
          return {
            ...currentState,
            proyectors:currentState.proyectors,
            proyector:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: true,
            proyectorToEdit: action.proyector,
            newProyector: null
          }

    case 'EDIT_PROYECTOR_SUCCESS':
         const updatedProyectores = currentState.proyectors.map((proyector) => {
           if(proyector._id !== action.proyector._id){
             //This is not the item we care about, keep it as is
             return proyector;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...proyector, ...action.proyector }
         })
          return {
            ...currentState,
            proyectors:updatedProyectores,
            proyector:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            proyectorToDelete: null,
            showEditModal: true,
            proyectorToEdit: action.proyector,
            newProyector: null
          }

  case 'EDIT_PROYECTOR_FAILED':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          proyectorToDelete: null,
          showEditModal: true,
          proyectorToEdit: currentState.proyectorToEdit,
          newProyector: null
        }

  case 'DELETE_PROYECTOR_REQUEST':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          proyectorToDelete: action.proyector,
          showEditModal: false,
          proyectorToEdit: null,
          newProyector: null
        }

  case 'DELETE_PROYECTOR_SUCCESS':
  const filteredProyectores = currentState.proyectors.filter((proyector) => proyector._id !== currentState.proyectorToDelete._id)
        return {
          ...currentState,
          proyectors:filteredProyectores,
          proyector:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          proyectorToDelete: null,
          showEditModal: false,
          proyectorToEdit: null,
          newProyector: null
        }


  case 'DELETE_PROYECTOR_FAILED':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          proyectorToDelete: null,
          showEditModal: false,
          proyectorToEdit: null,
          newProyector: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          proyectorToDelete: action.proyector,
          showEditModal: false,
          proyectorToEdit: null,
          newProyector: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          proyectors:currentState.proyectors,
          proyector:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          proyectorToDelete: null,
          showEditModal: false,
          proyectorToEdit: null,
          newProyector: null
        }


    default:
       return currentState;

  }
}
