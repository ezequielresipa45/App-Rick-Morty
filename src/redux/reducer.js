// Inicializamos el estado de objetos.
const initialState = {
  myFavorites: [],
};

// El encargado de enviarle al state nuestros pedidos o cambios que querramos hacer.
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_PERSONAJE':
        return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        }

    case 'DELETE_PERSONAJE':
        return{
            ...state,

            myFavorites: [...state.myFavorites.filter((personaje)=> personaje.id !== action.payload)]
        }



    default:
      return {
        ...state,
      };
  }
};

export default reducer;