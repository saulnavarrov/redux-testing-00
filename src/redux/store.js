import { createStore } from 'redux'; // importo la libreria y llamo esa funcion en especifico
import reducer from './reducer'; // importamos el reducer


// Creamos la stores
const store = createStore(reducer);

// exportamos las stores a quien las necesite
export default store;