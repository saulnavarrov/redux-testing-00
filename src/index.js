// importando la store creadas de redux
import store from './redux/store';

// seleccionamos los elementos de htmlDom
const itemsListDom = $('#itemList');
const itemDom = $('#item');

// funcion para actualizar listas
function actualizarLista(items) {
}


// cualquier cambio se vea reflejado en la pantalla
store.subcribe(() => {
  const state = store =getState();

  // defino una funcion para actualizar la listados
  // envio los stados
  actualizarLista(state);
});
