export const addPersonaje = (name) => {
  return {
    type: "ADD_PERSONAJE",
    payload: name,
  };
};

export const deletePersonaje = (id) => {
  return {
    type: "DELETE_PERSONAJE",
    payload: id,
  };
};

export const filterCards = (status) => {
  return {
    type: "FILTER",
    payload: status,
  };
};
