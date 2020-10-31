import * as ActionTypes from '../actionTypes.js';


const todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
          return [ ...state,
            {
              id: action.id,
              text: action.text,
              completed: false,
              isEdit: false
            }];
        case ActionTypes.DELETE_TODO:
            return state.filter(todo =>
              todo.id !== action.id
            );
        case ActionTypes.EDIT_TODO:
              return state.map(todo =>
                (todo.id === action.id ?
                  Object.assign({}, todo, { text: action.text, isEdit: action.isEdit || false }) :
                  todo)
              );
        case ActionTypes.COMPLETE_TODO:
              return state.map(todo =>
                (todo.id === action.id ?
                  Object.assign({}, todo, { completed: !todo.completed }) :
                  todo)
              );
        case ActionTypes.CLEAR_COMPLETED:
          return state.filter(todo => todo.completed === false);
        default:
          return state
      }
  }
  
  export default todos;
