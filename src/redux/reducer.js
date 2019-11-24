
// Creamos la funcion de reducer
// dejo por default un arreglo vacio para
// listar los elementos
function reducer(state = [], action) {
  switch(action.type){

    // agrega un nuevo elemento a la lista
    case 'AGREGAR': {

    }

    // borra un elemento de la lista
    case 'BORRAR': {

    }

    // alterna si ya fue marcado o no
    case 'ALTERNAR': {

    }

    
    // Retornamos el stado normal
    default: 
      return state;
  }
}

// Exportamos la funcion
export default reducer;