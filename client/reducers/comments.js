// a reducer takes in two things:
// 1. the action (info about what happened) 
// 2. a copy of the current state
// and returns a new state

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      // return the new state without the removed comment
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }

}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;

// redux solo puede tener un reducer, por lo que vamos a tener un root reducer que combine todos los reducers, hacemos un reducer por cada parte de la aplicación, en este caso tenemos un reducer para los comentarios y otro para los posts, y luego los combinamos en el root reducer
// el root reducer es el que se pasa al store, y es el que se encarga de manejar el estado de la aplicación, en este caso los comentarios y los posts