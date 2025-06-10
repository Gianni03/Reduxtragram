// increment

function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comment

function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment

function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}

// estos son los actions que se exportan, se exportan para que se puedan usar en otros archivos y son funciones que retornan un objeto con un tipo y los datos necesarios para realizar la acción
export { increment, addComment, removeComment };