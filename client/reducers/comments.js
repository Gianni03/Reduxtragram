// a reducer takes in two things:
// 1. the action (info about what happened) 
// 2. a copy of the current state
// and returns a new state


function comments(state = [], action) {
  console.log(state,action);
  return state;
}

export default comments;

// redux solo puede tener un reducer, por lo que vamos a tener un root reducer que combine todos los reducers, hacemos un reducer por cada parte de la aplicación, en este caso tenemos un reducer para los comentarios y otro para los posts, y luego los combinamos en el root reducer
// el root reducer es el que se pasa al store, y es el que se encarga de manejar el estado de la aplicación, en este caso los comentarios y los posts