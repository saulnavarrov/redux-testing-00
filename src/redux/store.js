// importo la libreria y llamo esa funcion en especifico
import { createStore } from 'redux';
// importamos el reducer
import reducer from './reducer'; 


// Creamos la stores
const store = createStore(reducer);

// exportamos las stores a quien las necesite
export default store;