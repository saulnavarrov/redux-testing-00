// importando la store creadas de redux
import store from './redux/store';

// seleccionamos los elementos de htmlDom
const itemsListDom = $('#itemList');
const itemDom = $('#item');

// funcion para actualizar listas
function actualizarLista(items) {
  // limpio el listado
  itemsListDom.html('');

  // iteramos en todos los items
  for (const item of items) {
    // clonamos el listado de item
    const cloneItemDom = itemDom.clone();
    // seleccionamos los elementos
    const chkHabilitacdoDom = cloneItemDom.find('input');
    const btnBorrarDom = cloneItemDom.find('button');
    const lblNombreDom = cloneItemDom.find('span');

    // Quitamos la clase que borra el elemento
    cloneItemDom.removeClass('d-none');

    // agregamos el texto al DOM
    lblNombreDom.html('item.text');

    // Iteramos si esta completado o no
    if (item.completado) {
      lblNombreDom.css('text-decoration','line-through');
    }


  }
}


// cualquier cambio se vea reflejado en la pantalla
store.subcribe(() => {
  const state = store =getState();

  // defino una funcion para actualizar la listados
  // envio los stados
  actualizarLista(state);
});
