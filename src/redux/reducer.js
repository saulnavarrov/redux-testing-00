// variable global que cuenta
let idItems = 0;


// Creamos la funcion de reducer
// dejo por default un arreglo vacio para
// listar los elementos
function reducer(state = [], action) {
  switch(action.type){

    // agrega un nuevo elemento a la lista
    case 'AGREGAR': {
      // aumento los el numero
      idItems++;

      // devuelvo el state + uno nuevo 
      return [
        ...state,
        {
          idItems,
          text: action.payload.text,
        }
      ];
    }

    // borra un elemento de la lista
    case 'BORRAR': {
      // Buscamos el item a borrar por su index
      const index = state.findIndex(n => n.id === action.payload.idItems);

      // Borramos
      state.splice(index, 1);

      // regresamos el state
      // como en redux no se puede cambiar los estados
      // no podemos devolerlo de esta manera debido a que ya cambio
      // return state;
      // lo devolvemos de manera alterna
      return [
        ...state,
      ];
    }

    // alterna si ya fue marcado o no
    case 'ALTERNAR': {
      // Buscamos el item para cambiar la propiedad completado
      const item = state.find(n => n.id === action.payload.idItems);

      // invertimos el estado actual del item
      item.completado = !item.completado;

      // devolvemos el state de la manera alterna
      return [
        ...state,
      ]
    }

    
    // Retornamos el stado normal
    default: 
      return state;
  }
}

// Exportamos la funcion
export default reducer;