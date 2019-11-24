// importando la store creadas de redux
import store from './redux/store';

// seleccionamos los elementos de htmlDom
const itemsListDom = $('#itemList');
const itemDom = $('#item');
const txtNuevaNotaDom = $('#txtNuevaNota');

// Guardamos una nueva nota al pulsar enter
txtNuevaNotaDom.keyup((e) => {
  if (e.keyCode === 13) {
    // Traigo el texto de la caja de texto
    const text = txtNuevaNotaDom.val();
    // Reinicio la caja de texto
    txtNuevaNotaDom.val('');

    // emitimos la accion agregar
    store.dispatch({
      type: 'AGREGAR',
      payload: {
        text,
      }
    });
  }
});

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
    lblNombreDom.html(item.text);

    // Iteramos si esta completado o no
    if (item.completado) {
      lblNombreDom.css('text-decoration','line-through');
    }

    // ----------------------------------------------------
    // Funciones de evento click
    // ----------------------------------------------------
    
    // Funcion de eliminar elemento item
    btnBorrarDom.on('click', () => {
      // ...
      store.dispatch({
        type: 'BORRAR',
        payload: {
          idItems: item.idItems
        }
      });
    });

    // 
    chkHabilitacdoDom.prop('checked', item.completado);
    chkHabilitacdoDom.on('click', () => {
      // ...
      store.dispatch({
        type: 'ALTERNAR',
        payload: {
          idItems: item.idItems
        }
      });
    });

    // Agregamos los elementos a la lista
    itemsListDom.append(cloneItemDom);

  }
}


// cualquier cambio se vea reflejado en la pantalla
store.subscribe(() => {
  const state = store.getState();

  // Defino una funcion para actualizar la lista
  // envio los estados y los pone en pantalla
  actualizarLista(state);
});

